// src/app/api/need-help/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email, semester, subject, message } = await req.json();

    // Create Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Your email
        pass: process.env.EMAIL_PASS,  // Your email app password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email address
      subject: `Request for Notes - ${subject}`,
      text: `Email: ${email}\nSemester: ${semester}\nMessage: ${message}`,
    };

    // Sending email
    await transporter.sendMail(mailOptions);
    

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
