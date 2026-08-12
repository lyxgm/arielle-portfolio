import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const REQUIRED_ENV = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_EMAIL',
];

const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.warn(`Missing env vars for /api/contact: ${missingEnv.join(', ')}`);
}

export async function POST(request: Request) {
  if (missingEnv.length > 0) {
    return NextResponse.json(
      { error: 'Mail server is not configured. Please set your SMTP environment variables.' },
      { status: 500 }
    );
  }

  const body = await request.json();
  const { name, email, company, service, message } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Please provide your name, email, and a message.' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const toAddress = process.env.CONTACT_EMAIL ?? 'ariellecess0816@gmail.com';
  const fromAddress = process.env.SMTP_FROM ?? process.env.SMTP_USER;

  const htmlMessage = `
    <h2>New contact request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || 'N/A'}</p>
    <p><strong>Service:</strong> ${service || 'N/A'}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br />')}</p>
  `;

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      subject: `New website inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nService: ${service || 'N/A'}\n\nMessage:\n${message}`,
      html: htmlMessage,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail send failed:', error);
    return NextResponse.json(
      { error: 'Unable to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
