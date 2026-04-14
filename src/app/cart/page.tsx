"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaTrash,
  FaUser,
  FaTruck,
  FaTag,
  FaLock,
  FaArrowRight,
  FaBoxOpen,
} from "react-icons/fa";
import { FaBagShopping, FaShieldHalved } from "react-icons/fa6";
import { useContext } from "react";
import { cartContext } from "../_context/cartContextProvider";
import { CartItemType } from "@/types/Cart";
import { deleteItemFromCart } from "../_actions/deleteCartActions";
import { toast } from "sonner";
import { updateCartItem } from "../_actions/updateCartAction";
import { deleteUserCart } from "../_actions/deleteAllCart";

export default function CartPage() {
  const { numberOfCartItems , totalPriceOfCart , cartProducts , setcartProducts , settotalPriceOfCart , setnumberOfCartItems  } = useContext(cartContext);
  


  async function handelDeleteItem(id : string){
    const res =  await deleteItemFromCart(id)

  if (res.status == "success"){
    setcartProducts(res.data.products)
    settotalPriceOfCart(res.data.totalCartPrice)
    setnumberOfCartItems(res.numOfCartItems)
     toast.success(res.message )
  }else{
    toast.error(res.message)
  }
  }


  async function handelUpdateCart(id : string , count : number) {
  const res = await updateCartItem(id , count)
  console.log(res)


  if (res.status == "success"){
    setcartProducts(res.data.products)
    settotalPriceOfCart(res.data.totalCartPrice)
    setnumberOfCartItems(res.numOfCartItems)
     toast.success(res.message )
  }else{
    toast.error(res.message)
  }
    


  
}

async function handeldeletUserCart() {
   const res = await deleteUserCart()
  console.log(res)


  if (res.status == "success"){
    setcartProducts(res.data.products)
    settotalPriceOfCart(res.data.totalCartPrice)
    setnumberOfCartItems(res.numOfCartItems)
     toast.success(res.message )
  }else{
    toast.error(res.message)
  }
}


  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
       
       

      {cartProducts && cartProducts.length > 0 ? <>
      
     
        {/* 🔹 Header */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#168C42] transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Shopping Cart</span>
          </nav>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-[#168C42] text-white w-12 h-12 rounded-xl flex items-center justify-center">
                  <FaShoppingCart />
                </span>
                Shopping Cart
              </h1>
              <p className="text-gray-500 mt-2">
                You have{" "}
                <span className="font-semibold text-[#168C42]">{numberOfCartItems } item</span> in
                your cart
              </p>
            </div>
          </div>
        </div>
          {/* 🔹 Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 🟢 Products */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartProducts.map((item : CartItemType) =>
              <>
               <div className="bg-white rounded-2xl shadow-sm border p-5">
                <div className="flex gap-6">
                  {/* Image */}
                  <Link href={`/products/${item.product.id}`}>
                    <div className="w-32 h-32 rounded-xl bg-gray-50 p-3 border overflow-hidden">
                      <Image
                        src={item.product.imageCover}
                        alt={item.product.title}
                        width={150}
                        height={150}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </Link>

                  {/* Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <h3 className="font-semibold text-lg">{item.product.title}</h3>

                      <span className="inline-block px-2 py-1 bg-green-50 text-[#168C42] text-xs rounded-full mt-2">
                        {item.product.category.name}
                      </span>
                    </div>

                    <span className="text-[#168C42] font-bold text-lg mb-4">
                      {item.price} EGP
                    </span>

                    {/* Actions */}
                    <div className="mt-auto flex justify-between items-center">
                      {/* Quantity */}
                      <div className="flex items-center bg-gray-50 rounded-xl p-1 border">
                        <button onClick={()=> handelUpdateCart( item.product.id, item.count - 1)} className="h-8 w-8 flex items-center justify-center cursor-pointer text-gray-500">
                          <FaMinus />
                        </button>

                        <span className="w-12 text-center font-bold">{item.count}</span>

                        <button onClick={()=> handelUpdateCart( item.product.id , item.count + 1)} className="h-8 w-8 cursor-pointer bg-[#168C42] text-white rounded-lg flex items-center justify-center hover:bg-[#147a39] transition">
                          <FaPlus />
                        </button>
                      </div>

                      {/* Total + Delete */}
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-xs text-gray-400">Total</p>
                          <p className="text-xl font-bold">{item.price} EGP</p>
                        </div>

                        <button onClick={ () => handelDeleteItem(item.product.id)} className="h-10 w-10 cursor-pointer rounded-xl border border-red-200 bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition">
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
              )}
             
            </div>

            {/* Footer actions */}
            <div className="mt-6 pt-6 border-t flex justify-between">
              <Link href="/" className="text-[#168C42] text-sm">
                ← Continue Shopping
              </Link>

              <button onClick={handeldeletUserCart} className="text-sm cursor-pointer text-gray-400 hover:text-red-500 flex items-center gap-2">
                <FaTrash />
                Clear all items
              </button>
            </div>
          </div>

          {/* 🟡 Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <FaBagShopping />
                  Order Summary
                </h2>
                <p className="text-green-100 text-sm mt-1">
                  {numberOfCartItems} items in your cart
                </p>
              </div>

              <div className="p-6 space-y-5">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FaTruck className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">
                      Free Shipping!
                    </p>
                    <p className="text-sm text-green-600">
                      You qualify for free delivery
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">
                      {totalPriceOfCart} EGP
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-green-600">FREE</span>
                  </div>

                  <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-gray-900 font-semibold">Total</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">
                          {totalPriceOfCart}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">EGP</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all">
                  <FaTag />
                  <span className="text-sm font-medium">Apply Promo Code</span>
                </button>

                <Link
                  href="/checkout"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                >
                  <FaLock />
                  <span>Secure Checkout</span>
                </Link>

                <div className="flex items-center justify-center gap-4 py-2">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FaShieldHalved className="text-green-500" />
                    <span>Secure Payment</span>
                  </div>

                  <div className="w-px h-4 bg-gray-200"></div>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <FaTruck className="text-blue-500" />
                    <span>Fast Delivery</span>
                  </div>
                </div>

                <Link
                  href="/"
                  className="block text-center text-green-600 hover:text-green-700 text-sm font-medium py-2"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
      :
      <> 
      <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        
        {/* Icon */}
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
            <FaBoxOpen className="text-5xl text-gray-300" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Your cart is empty
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-8 leading-relaxed">
          Looks like you haven&apos;t added anything to your cart yet.
          <br />
          Start exploring our products!
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-green-600 text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg active:scale-[0.98]"
        >
          Start Shopping
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </div>
    </>}
       
      </div>
    </div>
  );
}
