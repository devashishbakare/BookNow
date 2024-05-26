const { Worker } = require("bullmq");
const { connection } = require("../config/queue");
const { transporter, renderTemplate } = require("../config/nodeMailer");

const emailWorker = new Worker(
  "bookNow-email-queue",
  async (job) => {
    //job.data -> we get your postman data
    try {
      console.log(job.data);
      if (job.data.reason == 0) {
        let htmlTemplate = renderTemplate(
          { bookingDetails: job.data.data },
          "/bookingConfirm.ejs"
        );
        const info = await transporter.sendMail({
          from: process.env.SMTP_AUTH_USER,
          to: job.data.to,
          subject: job.data.subject,
          html: htmlTemplate,
        });
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

module.exports = emailWorker;
