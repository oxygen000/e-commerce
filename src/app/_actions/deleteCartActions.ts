"use server";

import { CardResType } from "@/types/Cart";
import { getMyToken } from "@/utils/getMyToken";

export async function deleteItemFromCart(productId : string): Promise<CardResType> {
  const token = await getMyToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`, {
    method: "DELETE",
    headers: {
      token: token as string,
    },
  });
  const finalRes = await res.json();
  return finalRes;
}
