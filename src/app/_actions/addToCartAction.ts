"use server";

import { CardResType } from "@/types/Cart";
import { getMyToken } from "@/utils/getMyToken";

export async function addProductToCard(id: string) : Promise<CardResType> {
  const token = await getMyToken();
  const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "POST",
    body: JSON.stringify({ productId: id }),
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });
  const finalRes = await res.json()
  console.log("finalRos from add to card",finalRes)
  return finalRes
}
