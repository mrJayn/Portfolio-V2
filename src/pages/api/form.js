require('dotenv').config()

export default function handler(req, res) {
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.SITE_EMAIL_USERNAME,
            pass: process.env.SITE_EMAIL_PASSWORD,
        },
        secure: true,
    })

    const mailData = {
        from: process.env.SITE_EMAIL_USERNAME,
        to: process.env.EMAIL_USERNAME,
        subject: `${req.body.subject}`,
        text: req.body.message,
        html: `
    <hr/>
    <div><strong>Name:</strong> ${req.body.name}</div>
    <div><strong>Email:</strong> ${req.body.email}</div>
    <hr/>
    <br/>
    <div>${req.body.message}</div>`,
    }

    new Promise((resolve, reject) => {
        transporter.sendMail(mailData, function (error, res) {
            if (error) {
                reject(error)
            } else {
                resolve('email sent')
            }
        })
    })

    /*
       transporter.sendMail(mailData, function (err, info) {
            if (err) console.log('err--', err)
            else console.log('Message sent: ' + info)
        })
    */

    res.status(200).end()
}
