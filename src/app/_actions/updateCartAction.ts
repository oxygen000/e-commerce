"use server";

import { CardResType } from "@/types/Cart";
import { getMyToken } from "@/utils/getMyToken";

export async function updateCartItem(id: string , count : number) : Promise<CardResType>  {
  const token = await getMyToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${id}`, {
    method: "PUT",
    body: JSON.stringify({count}),
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });
  const finalRes = await res.json();
  return finalRes;
}
