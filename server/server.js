import express, { json } from "express";
import { createTransport } from "nodemailer";
import cors from "cors";
import { verifyAPIKey } from "./middleware/apiAuth.js";
import axios from "axios";

const app = express();

app.use(cors());
app.use(json());

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/send", verifyAPIKey, (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error, info);
      return res.status(500).send(error);
    }
    res.status(200).send("Email sent successfully");
  });
});

app.post("/verify", verifyAPIKey, async (request, response) => {
  const { captchaValue } = request.body;
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_SECRET}&response=${captchaValue}`
  );
  response.send(data);
});

const port = 3030;

app.listen(port, () => console.log(`Server running on port ${port}`));
