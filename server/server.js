import express from 'express'
import mysql from 'mysql2/promise'
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
const port = process.env.PORT || 3001

app.use(express.json({ limit: '2mb' }))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'easyprodigital',
  waitForConnections: true,
  connectionLimit: 10,
})

const transporter = process.env.SMTP_HOST
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true' || Number(process.env.SMTP_PORT || 587) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null

async function sendThankYouEmail(payload) {
  if (!transporter) {
    console.log('SMTP not configured. Skipping email autoresponse.')
    return { sent: false, reason: 'smtp-not-configured' }
  }

  const recipient = payload.ctEmail || payload.contacto_correo || process.env.MAIL_TO || 'info@easyprodigital.com'
  const businessName = payload.bizName || 'tu negocio'
  const subject = `Gracias por completar el formulario de ${businessName}`
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #101418;">
      <h2 style="color: #117ead;">Gracias por contactar a Easy Pro Digital</h2>
      <p>Hola,</p>
      <p>Recibí tu formulario de descubrimiento y muchas gracias por compartir la información de ${businessName}.</p>
      <p>Pronto me pondré en contacto contigo para revisar tus necesidades y darte una propuesta de valor adaptada a tu negocio.</p>
      <p>Mientras tanto, si quieres, puedes responder a este correo con una URL de tu sitio, catálogo o una idea específica y te ayudo a aclararla.</p>
      <p>Un abrazo,<br/>Jesús Manuel Cristancho<br/>Easy Pro Digital</p>
    </div>
  `

  await transporter.sendMail({
    from: process.env.MAIL_FROM || 'no-reply@easyprodigital.com',
    to: recipient,
    cc: process.env.MAIL_TO || 'info@easyprodigital.com',
    subject,
    html,
  })

  return { sent: true }
}

app.post('/api/rag-form', async (req, res) => {
  try {
    const payload = req.body
    const [result] = await pool.execute(
      `INSERT INTO rag_forms (payload, created_at) VALUES (?, NOW())`,
      [JSON.stringify(payload)]
    )

    let emailResult = { sent: false, reason: 'not-attempted' }
    try {
      emailResult = await sendThankYouEmail(payload)
    } catch (error) {
      console.error('Email sending failed:', error)
      emailResult = { sent: false, reason: error.message }
    }

    res.status(201).json({ success: true, insertedId: result.insertId, email: emailResult })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'No se pudo guardar el formulario.', error: error.message })
  }
})

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ ok: true })
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message })
  }
})

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
