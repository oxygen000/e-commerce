"use server";

import { OrderType } from "@/types/orders";
import { getMyToken } from "@/utils/getMyToken";
import { jwtDecode } from "jwt-decode";

type TokenType = {
  id: string;
};

export async function getUserOrders(): Promise<OrderType[]> {
  const token = await getMyToken();

  const decoded: TokenType = jwtDecode(token as string);
  const userId = decoded.id;

  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
  );

  const finalRes = await res.json();
  return finalRes;
}
