export interface shippingAddressType {
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
  };
}



export interface OrderType {
  _id: string;
  id: number;

  shippingAddress: ShippingAddress;

  user: User;

  cartItems: CartItem[];

  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;

  paymentMethodType: "cash" | "card" | string;

  isPaid: boolean;
  isDelivered: boolean;

  createdAt: string;
  updatedAt: string;

  __v?: number;
}

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface CartItem {
  _id: string;
  count: number;
  price: number;

  product: Product;
}

export interface Product {
  _id: string;
  title: string;
  imageCover: string;
  id?: string;

  category: Category;
  brand: Brand;
  subcategory: SubCategory[];
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

export interface SubCategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}