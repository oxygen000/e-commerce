"use server";

import { ProductDataType } from "@/types/ProductData";
import { getMyToken } from "@/utils/getMyToken";

export async function getProductData(
  productId: string,
): Promise<ProductDataType> {
  const token = await getMyToken();
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${productId}`,
    {
      headers: {
        token: token as string,
      },
    },
  );
  const finalRes = await res.json();
  return finalRes.data;
}
