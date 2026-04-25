"use server";
import { shippingAddressType } from "@/types/orders";
import { getMyToken } from "@/utils/getMyToken";

export async function createOrderCash(
  cartId: string,
  shippingAddress: shippingAddressType,
) {
  const token = await getMyToken();

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify(shippingAddress),
    },
  );
  const finalRes = await res.json();
  return finalRes;
}

export async function createOrderCredit(
  cartId: string,
  shippingAddress: shippingAddressType,
) {
  const token = await getMyToken();

  if (!token) return { message: "Please Login First!", statusCode: 401 };

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify(shippingAddress),
    },
  );
  const finalRes = await res.json();
  return finalRes;
}
