"use server"

import { CategoriesType } from "@/types/Categories";

export async function getCategoryById(id: string): Promise<CategoriesType> {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
  const data = await res.json();
  return data.data;
}