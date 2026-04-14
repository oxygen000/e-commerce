"use client";

import { createContext, ReactNode, useState } from "react";
import { CardResType, CartItemType } from "@/types/Cart";
import { CartContextType } from "@/types/Context";


export const cartContext = createContext<CartContextType>({} as CartContextType);

export default function CartContextProvider({
  children,
  userCart,
}: {
  children: ReactNode;
  userCart: CardResType;
}) {

  const [numberOfCartItems, setnumberOfCartItems] = useState(
    userCart?.numOfCartItems,
  );
  const [totalPriceOfCart, settotalPriceOfCart] = useState(
    userCart?.data?.totalCartPrice,
  );
  const [cartId, setcartId] = useState(userCart?.cartId)
  const [cartProducts, setcartProducts] = useState<CartItemType[]>(userCart?.data?.products);
  return (
    <cartContext.Provider
      value={{
        numberOfCartItems,
        setnumberOfCartItems,
        totalPriceOfCart,
        settotalPriceOfCart,
        cartProducts,
        setcartProducts,
        setcartId,
        cartId
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
