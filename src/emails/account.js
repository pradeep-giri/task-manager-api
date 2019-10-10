const sgMail = require('@sendgrid/mail')
//const sendgridAPIKey = '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'

//sgMail.setApiKey(sendgridAPIKey)

sgMail.setApiKey(process.env.SENDGRID_API_key)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pradeepgiri.pg123@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pradeepgiri.pg123@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}