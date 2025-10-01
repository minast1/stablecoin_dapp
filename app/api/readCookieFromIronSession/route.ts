import { sessionOptions } from "@/lib/iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface SessionData {
  nonce?: string;
  isLoggedIn?: boolean;
}

export async function GET() {
  try {
    const cookieStore = await cookies();

    const session = await getIronSession<SessionData>(
      cookieStore,
      sessionOptions
    );

    return NextResponse.json(
      {
        cookie: session.nonce,
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
