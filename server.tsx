import express, { type Request, type Response } from "express"
import nodemailer from "nodemailer"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "irsusheikh2@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "bzhh wwes gzps acxz",
  },
  port: Number.parseInt(process.env.EMAIL_PORT || "587"),
})

// Contact form endpoint
app.post("/api/send-email", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message } = req.body

    // Validation
    if (!name || !email || !phone || !message) {
      res.status(400).json({ error: "All fields are required" })
      return
    }

    // Email to user (thank you message)
    const userMailOptions = {
      from: process.env.EMAIL_USER || "irsusheikh2@gmail.com",
      to: email,
      subject: "Thank You - We Received Your Message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37; margin-bottom: 20px;">Thank You for Contacting Us!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and appreciate you reaching out to Klinkara Luxury.</p>
          <p><strong>Message Details:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
          <p>Our team will review your inquiry and get back to you within 24 hours.</p>
          <p>Best regards,<br/>Klinkara Luxury Team</p>
        </div>
      `,
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "irsusheikh2@gmail.com",
      to: process.env.EMAIL_USER || "irsusheikh2@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37; margin-bottom: 20px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(userMailOptions)
    await transporter.sendMail(adminMailOptions)

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    })
  } catch (error) {
    console.error("Email error:", error)
    res.status(500).json({
      error: "Failed to send email",
      details: error instanceof Error ? error.message : "Unknown error",
    })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
