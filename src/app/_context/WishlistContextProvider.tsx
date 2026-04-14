"use client";

import { createContext, ReactNode, useState, useEffect } from "react";
import { WishlistItemType, WishlistResType } from "@/types/Wishlist";
import { WishlistContextType } from "@/types/Context";

export const WishlistContext = createContext<WishlistContextType>(
  {} as WishlistContextType,
);

export default function WishlistContextProvider({
  children,
  userWishlist,
}: {
  children: ReactNode;
  userWishlist: WishlistResType;
}) {
  const [wishlist, setwishlist] = useState<WishlistItemType[]>(
    userWishlist?.data || [],
  );

  const [numberOfWishlistItems, setnumberOfWishlistItems] = useState<number>(
    userWishlist?.count || 0,
  );

  useEffect(() => {
    setnumberOfWishlistItems(wishlist.length);
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setwishlist,
        numberOfWishlistItems,
        setnumberOfWishlistItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
