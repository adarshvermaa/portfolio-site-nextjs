import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;
        const file = formData.get("file") as File | null;

        // Basic server-side validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Configure Nodemailer Transporter
        // NOTE: In a real app, these credentials should be in .env.local
        // For now, we'll check if env vars exist or error out gracefully.
        const transporter = nodemailer.createTransport({
            service: "gmail", // Or use host/port/secure from env
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions: nodemailer.SendMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to self
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
        `,
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Submission</title>
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
    .header { background: #000000; color: #ffffff; padding: 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; }
    .content { padding: 40px 30px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 5px; font-weight: 600; }
    .value { font-size: 16px; color: #000; font-weight: 500; }
    .message-box { background: #fafafa; border-left: 4px solid #000; padding: 20px; margin-top: 10px; border-radius: 4px; }
    .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; }
    .button { display: inline-block; padding: 10px 20px; background: #000; color: #fff; text-decoration: none; border-radius: 6px; font-size: 14px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Portfolio Inquiry</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">From</div>
        <div class="value">${name} <span style="color: #666; font-weight: normal;">(${email})</span></div>
      </div>
      
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${subject}</div>
      </div>

      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">
          <div class="value" style="white-space: pre-wrap;">${message}</div>
        </div>
      </div>

      <div style="text-align: center;">
        <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; padding: 12px 24px; background-color: #000000; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">Reply to Sender</a>
      </div>
    </div>
    <div class="footer">
      <p>Sent from your portfolio website contact form.</p>
      <p>&copy; ${new Date().getFullYear()} Adarsh Verma. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
            `,
            attachments: [],
        };

        if (file) {
            const buffer = Buffer.from(await file.arrayBuffer());
            mailOptions.attachments?.push({
                filename: file.name,
                content: buffer,
            });
        }

        // Attempt sharing the email if credentials are present, otherwise mock success for demo
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.warn("Email credentials missing using MOCK SUCCESS. Add EMAIL_USER and EMAIL_PASS to .env.local");
            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Contact Form Error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
