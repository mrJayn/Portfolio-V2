require('dotenv').config()

export default function handler(req, res) {
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'site.email.notification@gmail.com',
            pass: process.env.PASSWORD,
        },
        secure: true,
    })
    const mailData = {
        from: process.env.EMAIL,
        to: 'm63jayne@gmail.com',
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

    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log('err--', err)
        else console.log('Message sent: ' + info)
    })

    res.status(200).end()
}
