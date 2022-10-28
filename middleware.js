import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  const { cookies } = req;
  const url = req.url;
  const token = cookies.get("token");

  if (
    url.includes("/customer") ||
    url.includes("/admin") ||
    url.includes("/buy-lottory")
  ) {
    if (token == undefined) {
      console.log(token);
      return NextResponse.redirect(`${origin}/login`);
    }
  } else {
    return NextResponse.next();
  }
  return NextResponse.next();
}
