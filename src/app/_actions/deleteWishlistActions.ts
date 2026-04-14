"use server";

import { WishlistResType } from "@/types/Wishlist";
import { getMyToken } from "@/utils/getMyToken";

export async function deleteItemFromWishlist(productId : string): Promise<WishlistResType> {
  const token = await getMyToken();
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
    method: "DELETE",
    headers: {
      token: token as string,
    },
  });
  const finalRes = await res.json();
  return finalRes;
}
