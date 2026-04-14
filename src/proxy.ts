import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const jwtToken = await getToken({ req });
  console.log("token from middleware", jwtToken);

  if (jwtToken == null) {
    return NextResponse.redirect("https://e-commerce-abdel-hamed.vercel.app/Login");
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/cart","/allorders","/checkout"],
};
