import nodemailer from 'nodemailer';
import process from 'process'

const emailRecever = async (subject, text)=>{

  let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // or your provider
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.emailUser,
    pass: process.env.pass,
  },
});

  const mailOption = {
    from : process.env.emailUser,
    to : process.env.emailSender,
    subject,
    text
  }

  let info =  await transporter.sendMail(mailOption);

  console.log(info)
}



export default emailRecever;