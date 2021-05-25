var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const { route } = require('./users');
const dotenv = require('dotenv');

dotenv.config();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about', (req, res, next) => {
  res.render('about')
});

router.get('/services', (req, res, next) => {
  res.render('services')
});

router.get('/contact', (req, res, next) => {
  res.render('contact', { msg: '' })
});

router.post('/send', async (req, res, next) => {

  const output = `
  <p>You have a new contact request</p>
  <h3>Contact</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Subject: ${req.body.subject}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone No: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `
  console.log(process.env.PASSWORD);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      // should be replaced with real sender's account
      user: 'lordorionrules@gmail.com',
      pass: 'Sashasmeat404'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"BURJTECH LTD 👻" <lordorionrules@gmail.com>', // sender address
    to: "official_preshi@yahoo.com", // list of receivers
    subject: "Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.render('contact', { msg: 'Email has been sent' });

  console.log(req.body);
})

module.exports = router;
