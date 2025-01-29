// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
// }

// import { serialize } from "cookie";

import { cookies } from "next/headers";

export async function POST(request: Request, params: { slug: string }) {
  const data: { password: string } = await request.json();
  const password = data.password;
  const cookieName = process.env.PASSWORD_COOKIE_NAME!;
  const pagePassword = process.env.PAGE_PASSWORD!;

  if (pagePassword !== password) {
    console.log(pagePassword);
    return new Response("incorrect password", {
      status: 401,
    });
  }
  // Set the cookie using the cookies utility
  cookies().set(cookieName, "true", {
    httpOnly: true,
    path: "/",
  });

  return new Response("password correct", {
    status: 200,
  });
}
