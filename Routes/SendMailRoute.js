const express = require("express");
const { sendEmail } = require("../Controller/SendEmail");
const SendMailRoute = express.Router();


SendMailRoute.post("/", function (req, res) {
  try {
      const { email, subject, message } = req.body;
      sendEmail(res,email,subject,message);
  } catch (error) {
      res.send(error)
  }
});


module.exports = SendMailRoute;
