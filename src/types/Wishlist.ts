
export interface WishlistResType {
  status: string;
  count: number;
  message: string;
  data: WishlistItemType[];
}


export interface WishlistItemType {
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
  ratingsQuantity: number;

  category: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };

  subcategory: {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }[];

  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };

  createdAt: string;
  updatedAt: string;
}