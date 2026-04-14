"use server";

import { WishlistResType } from "@/types/Wishlist";
import { getMyToken } from "@/utils/getMyToken";

export async function addProductToWishlist(id: string) : Promise<WishlistResType> {
  const token = await getMyToken();
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    method: "POST",
    body: JSON.stringify({ productId: id }),
    headers: {
      "Content-Type": "application/json",
      token: token as string,
    },
  });
  const finalRes = await res.json()
  console.log("finalRos from add to Wishlist",finalRes)
  return finalRes
}
