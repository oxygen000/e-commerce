"use server";

import { WishlistResType } from "@/types/Wishlist";
import { getMyToken } from "@/utils/getMyToken";

export async function getUseWishlist(): Promise<WishlistResType> {
  const token = await getMyToken();
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    headers: {
      token: token as string,
    },
  });
  const finalRes = await res.json();
  return finalRes;
}
