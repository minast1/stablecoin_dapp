import { submitCookieToIronSession } from "@/actions/auth";
import { NextResponse } from "next/server";
import { generateNonce } from "siwe";

export async function POST() {
  try {
    const nonce = generateNonce();
    await submitCookieToIronSession({ cookie: nonce });
    return NextResponse.json(
      {
        nonce: nonce,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
