"use server"

import { ProductType } from "@/types/Products";

export async function getAllProducts(): Promise<ProductType[]> {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
  const data = await res.json();
  return data.data;
}