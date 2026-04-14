"use client"
import { addProductToCard } from "@/app/_actions/addToCartAction";
import { cartContext } from "@/app/_context/cartContextProvider";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "sonner";

export default function ButtonAddToCard({productId}:{ productId :string}) {

 const {setnumberOfCartItems , setcartProducts , settotalPriceOfCart } =  useContext(cartContext)

  async  function hadeladdToCard(){
        
      const res =  await addProductToCard(productId)
      if(res.status == "success"){
        toast.success(res.message )
        setnumberOfCartItems(res.numOfCartItems)
        settotalPriceOfCart(res.data.totalCartPrice)
        setcartProducts(res.data.products)

      }
    }

 
  return (
    <>
      <Button
        onClick={hadeladdToCard}
        className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center bg-green-600 text-white hover:bg-green-700 transition"
      >
        <FaPlus />
      </Button>
    </>
  );
}
