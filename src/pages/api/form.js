require('dotenv').config()

export default function handler(req, res) {
    const nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.SITE_EMAIL_USERNAME,
            pass: process.env.SITE_EMAIL_PASSWORD,
        },
    })

    const message = {
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

    transporter.sendMail(message, (err, info) => {
        if (err) return console.log('err--', err)
        console.log('Message sent!')
    })

    res.status(200).end()
}
