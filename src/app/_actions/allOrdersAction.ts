"use server"

import { ProductOrder } from "@/types/orders";


export async function getAllOrders(): Promise<ProductOrder[]> {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/orders/");
  const data = await res.json();
  return data.data;
}