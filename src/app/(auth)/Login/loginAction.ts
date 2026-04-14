"use server";

import { cookies } from "next/headers";
import { LoginSchemaType } from "./loginSchema";

export async function loginUser(formData: LoginSchemaType) {
  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    },
  );

  const data = await res.json();
  console.log("data:", data);

  const thisCookies = await cookies();

  thisCookies.set("token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return res.ok;
}
