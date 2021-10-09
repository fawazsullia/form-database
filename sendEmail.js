const nodemailer = require('nodemailer')
require('dotenv').config();

const EMAIL = process.env.EMAIL
const PASS = process.env.EMAIL_PASS


function sendEmail(toAddress, details){

const message = `
You have new form submission.
Here's the details:
${details}
`


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASS
    }
  });
  
  const mailOptions = {
    from: 'Form-Database',
    to: toAddress,
    subject: 'One recent form submission',
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendEmail