// You can send emails to users with the evtas-sdk
const etvas = require('@etvas/etvas-sdk')

const recipients = {
  to: process.env.MAILSEND_TO, // to: 'email_to@test.com,email_to_2@test.com'
  cc: process.env.MAILSEND_CC,
  bcc: process.env.MAILSEND_BCC,
}

const formatRecipients = recipients => {
  if (!recipients) {
    return null
  }
  const emails = recipients.split(',')
  return emails
    .map(email => email.trim().toLowerCase())
    .filter(email => !!email)
}

module.exports = (subject, text) =>
  etvas.client._sendRawEmail({
    to: formatRecipients(recipients.to),
    cc: formatRecipients(recipients.cc),
    bcc: formatRecipients(recipients.bcc),
    subject,
    text,
  })
