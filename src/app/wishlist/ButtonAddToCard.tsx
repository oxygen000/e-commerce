"use client";
import { addProductToCard } from "@/app/_actions/addToCartAction";
import { cartContext } from "@/app/_context/cartContextProvider";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { toast } from "sonner";

export default function ButtonAddToCard({ productId }: { productId: string }) {
  const { setnumberOfCartItems, setcartProducts, settotalPriceOfCart } =
    useContext(cartContext);

  async function hadeladdToCard() {
    const res = await addProductToCard(productId);
    if (res.status == "success") {
      toast.success(res.message);
      setnumberOfCartItems(res.numOfCartItems);
      settotalPriceOfCart(res.data.totalCartPrice);
      setcartProducts(res.data.products);
    }
  }

  return (
    <>
      <button
        onClick={hadeladdToCard}
        className="bg-green-600 flex gap-1 items-center cursor-pointer text-white text-xs px-4 py-2 rounded-lg hover:bg-green-700"
      >
        <FaShoppingCart />
        Add to Cart
      </button>
    </>
  );
}
