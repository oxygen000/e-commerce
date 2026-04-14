import { CartItemType } from "./Cart";
import { WishlistItemType } from "./Wishlist";

export interface CartContextType  {
  numberOfCartItems: number;
  setnumberOfCartItems: React.Dispatch<React.SetStateAction<number>>;

  totalPriceOfCart: number;
  settotalPriceOfCart: React.Dispatch<React.SetStateAction<number>>;

  cartProducts: CartItemType[];
  setcartProducts: React.Dispatch<React.SetStateAction<CartItemType[]>>;

  cartId: string;
  setcartId: React.Dispatch<React.SetStateAction<string>>;
};



export interface WishlistContextType {
  wishlist: WishlistItemType[];
  setwishlist: React.Dispatch<React.SetStateAction<WishlistItemType[]>>;

  numberOfWishlistItems: number;
  setnumberOfWishlistItems: React.Dispatch<
    React.SetStateAction<number>
  >;
}