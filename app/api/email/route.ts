import NikeReceiptEmail from "@/react-email-starter/emails/nike"
import StripeWelcomeEmail from "@/react-email-starter/emails/stripe-welcome"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: "Nike <onboarding@resend.dev>",
      to: ["familymahamat@gmail.com"],
      subject: "Nike Order",
      react: NikeReceiptEmail(),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
