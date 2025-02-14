import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error(
    "Missing required environment variables: EMAIL_USER and EMAIL_PASS"
  );
}

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ status: "Bad Request", message: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.mail.ovh.net",
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
    secure: true,
  });

  try {
    await transporter.verify();
    console.log("Server is ready to take our messages");

    const mailData = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: message,
      html: `${message}`,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json({ status: "OK" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: "Error", message: "Failed to send email" }, { status: 500 });
  }
}