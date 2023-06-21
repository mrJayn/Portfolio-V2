require('dotenv').config()
const nodemailer = require('nodemailer')
const { google } = require('googleapis')

export default async function handler(req, res) {
    const OAuth2 = google.auth.OAuth2
    const { name, email, subject, message } = req.body

    const content = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'mikejayne.com',
        text: message,
        html: `
    <hr/>
    <div><strong>Name:</strong> ${name}</div>
    <div><strong>Email:</strong> ${email}</div>
    <div><strong>Subject:</strong> ${subject}</div>
    <br/>
    <div>${message}</div>`,
    }

    const createTransporter = async () => {
        const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            'https://developers.google.com/oauthplayground'
        )

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN,
        })

        const myAccessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject('Failed to create access token')
                }
                resolve(token)
            })
        }).catch((e) => console.log('Access Token Error'))

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.EMAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: myAccessToken,
            },
            secure: true,
            tls: {
                rejectUnauthorized: false,
            },
        })

        try {
            return transporter
        } catch (e) {
            console.log('Create Transport Error')
        }
    }

    const sendEmail = async (emailOptions) => {
        try {
            let emailTransporter = await createTransporter()

            const response = await emailTransporter.sendMail(emailOptions).catch((e) => console.log('Email Transport Error'))

            return response
        } catch (e) {
            console.log('Email Transport Error')
        }
    }

    try {
        const response = await sendEmail(content)
            .then(() => res.status(200).json({ message: 'Email sent successfully' }))
            .catch((e) => console.log('Send Email Err'))
        return response
    } catch (error) {
        console.log('Email Send Error')
        return res.status(500).json({ message: 'Email Send Error', error: error.message || error.toString() })
    }
}
