"use server";

import { getMyToken } from "@/utils/getMyToken";

export async function deleteUserCart() {
  const token = await getMyToken();
  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "DELETE",
    headers: {
      token: token as string,
    },
  });
  const finalRes = await res.json();
  return finalRes;
}
