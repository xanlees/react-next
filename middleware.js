import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  const { cookies } = req;
  const url = req.url;
  const token = cookies.get("token");
  console.log(req.url);

  if (
    !url.includes("/login") &&
    !url.includes("/_") &&
    !url.includes("/favicon.ico")
  ) {
    console.log("enter");
    if (token == undefined) {
      return NextResponse.redirect(`${origin}/login`);
    }
  } else {
    return NextResponse.next();
  }
  return NextResponse.next();
}
