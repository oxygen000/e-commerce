"use client"
import { addProductToWishlist } from "@/app/_actions/addToWishlistAction";
import { getUseWishlist } from "@/app/_actions/getUserWishlist";
import { WishlistContext } from "@/app/_context/WishlistContextProvider";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { toast } from "sonner";

export default function ButtonAddToWishlist({productId}:{ productId :string}) {

  const { wishlist, setwishlist,setnumberOfWishlistItems } = useContext(WishlistContext);

  async  function hadeladdToWishlist(){
        
      const res =  await addProductToWishlist(productId)
      if(res.status == "success"){
        toast.success(res.message )
         const getsetDataInTheWishlist =  await getUseWishlist()
         setwishlist(getsetDataInTheWishlist.data)
        setnumberOfWishlistItems(wishlist.length )

      }
    }

 
  return (
    <>
      <Button
        onClick={hadeladdToWishlist}
        className="bg-white h-8 w-8 cursor-pointer rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500"
      >
        <IoIosHeartEmpty  />
      </Button>
    </>
  );
}
