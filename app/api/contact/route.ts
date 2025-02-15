import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error(
    "Missing required environment variables: EMAIL_USER and EMAIL_PASS"
  );
}

export async function POST(req: NextRequest) {
  let data;
  try {
    data = await req.json();
  } catch (error) {
    return NextResponse.json(
      { status: "Bad Request", message: "Invalid JSON" },
      { status: 400 }
    );
  }

  const { statut, societe, name, surname, email, phone, message } = data;

  if (
    !statut ||
    !societe ||
    !name ||
    !surname ||
    !email ||
    !phone ||
    !message
  ) {
    return NextResponse.json(
      { status: "Bad Request", message: "Missing required fields" },
      { status: 400 }
    );
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
      subject: `Formulaire de contact LinguaSphere`,
      text: message,
      html: `
      Statut : ${statut} <br>
      Societe ou association : ${societe} <br>
      Nom : ${name} <br>
      Prénom : ${surname} <br>
      Email : <a href="mailto:${email}" >${email}</a> <br>
      Tel : ${phone} <br>
      Message : ${message}
      `,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json({ status: "OK" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: "Error", message: "Failed to send email" },
      { status: 500 }
    );
  }
}
