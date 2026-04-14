"use server"

import { CategoriesType } from "@/types/Categories";

export async function getAllCategories(): Promise<CategoriesType[]> {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
  const data = await res.json();
  return data.data;
}

