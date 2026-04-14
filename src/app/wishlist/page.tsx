"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import {
  FaArrowRight,
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
} from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { WishlistContext } from "../_context/WishlistContextProvider";
import { WishlistItemType } from "@/types/Wishlist";
import { deleteItemFromWishlist } from "../_actions/deleteWishlistActions";
import { toast } from "sonner";
import { getUseWishlist } from "../_actions/getUserWishlist";
import ButtonAddToCard from "./ButtonAddToCard";

export default function Wishlist() {
  const { wishlist, setwishlist, setnumberOfWishlistItems } =
    useContext(WishlistContext);



  async function handelDeleteItem(id: string) {
    const res = await deleteItemFromWishlist(id);

    if (res.status == "success") {
      setnumberOfWishlistItems(wishlist.length);
      toast.success(res.message);
      const getsetDataInTheWishlist = await getUseWishlist();
      setwishlist(getsetDataInTheWishlist.data);
    } else {
      toast.error(res.message);
    }
  }

  if (!wishlist.length) {
    return (
      <div className="min-h-screen bg-gray-50/50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-sm mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <FaRegHeart className="text-3xl text-gray-400" />
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Your wishlist is empty
            </h2>

            <p className="text-gray-500 text-sm mb-6">
              Browse products and save your favorites here.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Browse Products
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-green-600 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Wishlist</span>
          </nav>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                  <FaHeart />
                </span>
                My Wishlist
              </h1>

              <p className="text-gray-500 mt-2">
                You have{" "}
                <span className="font-semibold text-red-500">
                  {wishlist.length} items
                </span>{" "}
                in your wishlist
              </p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-4 p-4 text-sm text-gray-500 border-b">
            <span>Product</span>
            <span>Price</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {wishlist.map((product: WishlistItemType) => (
            <div
              key={product._id}
              className="grid grid-cols-4 items-center p-4 border-b last:border-none"
            >
              {/* Product */}
              <div className="flex items-center gap-3">
                <Image
                  src={product.imageCover}
                  alt={product.title}
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />

                <div>
                  <h3 className="text-sm font-medium">{product.title}</h3>
                  <p className="text-xs text-gray-500">
                    {product.category?.name}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="font-semibold text-sm">{product.price} EGP</div>

              {/* Status */}
              <div>
                <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full">
                  In Stock
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <ButtonAddToCard  productId ={product.id}/>

                <button
                  onClick={() => handelDeleteItem(product._id)}
                  className="p-2 border rounded-lg text-red-600 cursor-pointer hover:bg-gray-100"
                >
                  <FaRegTrashCan />
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/products"
          className="inline-block mt-6 text-sm text-gray-500 hover:text-green-600"
        >
          ← Continue Shopping
        </Link>
      </div>
    </div>
  );
}
