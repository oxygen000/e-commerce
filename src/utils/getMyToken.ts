import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyToken() {
  const MyCookies = await cookies();

  const tokenFromCookies =
    MyCookies.get("next-auth.session-token")?.value;

  if (!tokenFromCookies) {
    return null;
  }

  const myTokenAfterDecode = await decode({
    token: tokenFromCookies,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  if (!myTokenAfterDecode) {
    return null;
  }

  

  return myTokenAfterDecode.realTokenFromBackend as string;
}
