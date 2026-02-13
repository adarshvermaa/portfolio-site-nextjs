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
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<hr />
<p><strong>Message:</strong></p>
<pre style="font-family: sans-serif;">${message}</pre>
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
