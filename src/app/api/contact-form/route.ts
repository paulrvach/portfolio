import EmailTemplete from "./email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: Request) => {
  const res = await request.json();
  const { name, email, message } = res;
  try {
    const toSender = await resend.emails.send({
      from: "paul@paulvachon.dev",
      to: email,
      subject: "Thanks for getting in touch!",
      react: EmailTemplete({
        name,
        email,
        message,
      }),
    });
    // const toMe = await resend.emails.send({
    //   from: "paul@paulvachon.dev",
    //   to: 'paulrvach@gmail.com',
    //   subject: "Thanks for getting in touch!",
    //   react: EmailTemplete({
    //     name,
    //     email,
    //     message,
    //   }),
    // });
    return NextResponse.json(toSender);
  } catch (error) {
    return NextResponse.json({ error });
  }
};
