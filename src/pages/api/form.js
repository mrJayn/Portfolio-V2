require('dotenv').config()
const PASSWORD = process.env.PASSWORD
const EMAIL = process.env.EMAIL
export default function handler(req, res) {
    console.log(PASSWORD)
    console.log(EMAIL)

    const body = req.body
    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'site.email.notification@gmail.com',
            pass: PASSWORD,
        },
        secure: true,
    })
    const mailData = {
        from: 'site.email.notification@gmail.com',
        to: 'm63jayne@gmail.com',
        subject: `${body.subject}`,
        text: body.message,
        html: `<div> Name: <b>${body.name}</b><br>  ${body.message}</div>`,
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log('err--', err)
        else console.log('Message sent: ' + info)
    })

    res.status(200).end()
}
