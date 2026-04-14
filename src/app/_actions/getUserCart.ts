"use server";

import { CardResType } from "@/types/Cart";
import { getMyToken } from "@/utils/getMyToken";

export async function getUseCart(): Promise<CardResType> {
  const token = await getMyToken();
  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    headers: {
      token: token as string,
    },
  });
  const finalRes = await res.json();
  return finalRes;
}
