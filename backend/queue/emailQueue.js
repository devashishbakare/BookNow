const { Worker } = require("bullmq");
const express = require("express");
const app = express();
const { connection } = require("../config/queue");
const { transporter, renderTemplate } = require("../config/nodeMailer");
//const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");
const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
const emailWorker = new Worker(
  "bookNow-email-queue",
  async (job) => {
    console.log("job id" + job.id);
    //job.data -> we get your postman data
    try {
      const bookingDetails = job.data.data;
      if (job.data.reason == 0) {
        console.log(job.data);
        console.log(job.data.data);
        console.log(job.data.pdfData);
        const pdfData = job.data.pdfData;
        const htmlContent = await renderEjsToHtml(
          "bookingPDFTemplate",
          pdfData
        );
        //console.log("html content here " + htmlContent);
        const filePath = await generatePdf(
          htmlContent,
          bookingDetails.bookingId
        );
        console.log(`PDF created at ${filePath}`);
        const emailRequestFor = job.data.reason;
        const emailResponse = await sendEmailWithAttachment(
          bookingDetails.email,
          filePath,
          emailRequestFor,
          bookingDetails
        );
        console.log(`Email sent: ${emailResponse}`);

        // Delete the local PDF file
        fs.unlinkSync(filePath);
        console.log(`PDF deleted from ${filePath}`);
      } else {
        await sendEmailWithAttachment(job.data.to, "", 1, bookingDetails);
      }
      return true;
    } catch (error) {
      console.error("Error sending email from queue:", error);
      return false;
    }
  },
  {
    connection,
    limiter: {
      max: 100,
      duration: 24 * 60 * 60 * 1000,
    },
  }
);

const generatePdf = async (htmlContent, bookingId) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  // Save the PDF to a file
  const fileName = `booking_details_${bookingId}.pdf`;
  const filePath = path.join(__dirname, "../views/storePDF", fileName);
  fs.writeFileSync(filePath, pdfBuffer);
  return filePath;
};

const sendEmailWithAttachment = async (
  sendEmailTo,
  filePath,
  emailRequestFor,
  bookingDetails
) => {
  // emailRequest == 0 : sending email for booking hotel
  if (emailRequestFor === 0) {
    let htmlTemplate = renderTemplate(
      { bookingDetails: bookingDetails },
      "/bookingConfirm.ejs"
    );

    const mailOptions = {
      from: process.env.SMTP_AUTH_USER,
      to: sendEmailTo,
      subject: "Hotel Booking Confimation Response",
      html: htmlTemplate,
      attachments: [
        {
          filename: path.basename(filePath),
          path: filePath,
        },
      ],
    };
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info.response);
        }
      });
    });
  } else {
    let htmlTemplate = renderTemplate(
      { bookingDetails: bookingDetails },
      "/bookingCancel.ejs"
    );

    const mailOptions = {
      from: process.env.SMTP_AUTH_USER,
      to: sendEmailTo,
      subject: "Hotel Booking Cancelation Response",
      html: htmlTemplate,
    };
    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          console.log(info.response);
          resolve(info.response);
        }
      });
    });
  }
};

const renderEjsToHtml = (bookingPDFTemplate, data) => {
  console.log("this is pdf data ", data);
  return new Promise((resolve, reject) => {
    app.render(bookingPDFTemplate, { bookingDetails: data }, (err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
};

module.exports = emailWorker;
