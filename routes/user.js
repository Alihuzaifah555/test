const express = require('express');
const router = express.Router();
const user = require("./../controller/user");
const nodeMailer = require("./../controller/nodemailer")

router.post("/signup",user.signup);
router.post("/login",user.login);
router.get("/getProducts",user.getProducts)
router.post("/sendMail",nodeMailer.sendmail)
module.exports = router