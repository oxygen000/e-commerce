export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}


export interface ProductDataType {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  sold: number;
  imageCover: string;
  images: string[];
  ratingsAverage: number;
  priceAfterDiscount?: number;
  ratingsQuantity: number;
  category: Category;
  brand: Brand;
  subcategory: SubCategory[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductResponse {
  data: ProductDataType;
}