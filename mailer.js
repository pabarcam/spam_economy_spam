const nodemailer = require('nodemailer')

const send = (to, subject, text) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nodemailerADL@gmail.com',
      pass: 'desafiolatam'
    }
  })
  
  let mailOption = {
    from: 'nodemailerADL@gmail.com',
    to,
    subject,
    text
  }
  
  transporter.sendMail(mailOption, (err, response) => {
    if(err) console.log(err)
    if(response) console.log(response)
  })
}

module.exports = send