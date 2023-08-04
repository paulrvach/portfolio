import EmailTemplete from '../../components/EmailTemplete';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: Request) => {
  const res = await request.json();
  const { firstName, lastName, company, email, message, phoneNumber } = res;
  try {
    const toSender = await resend.emails.send({
      from: 'paul@paulvachon.dev',
      to: email,
      subject: 'Thanks for getting in touch!',
      react: EmailTemplete({
        firstName,
        lastName,
        company,
        email,
        message,
        phoneNumber,
      }),
    });
    return NextResponse.json(toSender);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
