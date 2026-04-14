"use server"

import { SignupSchemaType } from "./registerSchema";

export async function registerUser(formData: SignupSchemaType) {
  const res = await fetch(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  const data = await res.json();
  return { ok: res.ok, data };
}