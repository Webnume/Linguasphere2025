import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieName = process.env.PASSWORD_COOKIE_NAME!;

  // Delete the cookie by setting its expiration date in the past
  cookies().set(cookieName, "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
  });

  return NextResponse.json({ message: "Logged out successfully" });
}
