"use server"

import { OrderType } from "@/types/orders";


export async function getAllOrders(): Promise<OrderType[]> {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/orders/");
  const data = await res.json();
  return data.data;
}