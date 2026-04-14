import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const jwtToken = await getToken({ req });
  console.log("token from middleware", jwtToken);

  if (jwtToken == null) {
    return NextResponse.redirect("http://localhost:3000/Login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/shop"],
};
