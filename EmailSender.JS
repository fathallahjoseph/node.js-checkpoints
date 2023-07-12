var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fathallahomar350@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'fathallahomar350@gmail.com',
  to: 'omartoumi158@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
// i install emailsender with key npm install nodemailer and i import these with key var nodemailer = require('nodemailer');