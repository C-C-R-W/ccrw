// app/api/subscribe/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email }: { email: string } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { error: "Valid email is required." },
      { status: 400 }
    );
  }

  try {
    // --- Connect to your third-party newsletter service here ---
    // e.g., Mailchimp, ConvertKit, Sendinblue API calls
    // await fetch('api.mailchimp.com', ...)

    // Simulate a successful subscription
    console.log(`Subscribed email: ${email}`);

    return NextResponse.json(
      { message: "Subscription successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
