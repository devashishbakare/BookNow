const express = require("express");
const app = express();
const path = require("path");
const swaggerJsDocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const db = require("./config/mongoose");
db();
const emailWorker = require("./queue/emailQueue");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cors());
app.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BookNow",
      version: "1.0.0",
      description: "BookNow Rest API's",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      },
    ],
  },

  apis: ["./routes/*.js"],
};
// object for parsing your comments, extracting the info
const openapiSpecification = swaggerJsDocs(options);
// generate access of your API on web with this url, this is done with the help of swagger-ui-express package
app.use(
  "/bookNow-api-docs",
  swaggerUi.serve,
  swaggerUi.setup(openapiSpecification)
);

app.use("/", require("./routes/index"));

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("something wrong while listening to port");
  } else {
    console.log("listning on port");
  }
});

module.exports = app;
