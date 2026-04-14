
export interface ProductType {
  title: string;
  imageCover: string;
  price: number;
  description: string;
  id: string;
  image: string[];
  ratingsAverage: number;
  ratingsQuantity: number;
  sold: number;
  priceAfterDiscount?: number;
  category: CategoryType;
  brand: BrandType;
}

export interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface BrandType {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
