"use client";

import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import {
  FaReceipt,
  FaArrowLeft,
  FaInfoCircle,
  FaWallet,
  FaMoneyBill,
  FaCreditCard,
  FaCheck,
  FaShieldAlt,
  FaShoppingBag,
  FaTruck,
  FaBox,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { cartContext } from "../_context/cartContextProvider";
import { useContext } from "react";
import { CartItemType } from "@/types/Cart";
import Image from "next/image";
import {
  createOrderCash,
  createOrderCredit,
} from "../_actions/cruetOrderActon";
import { shippingAddressType } from "@/types/orders";

interface FormValues {
  city: string;
  details: string;
  phone: string;
  paymentMethod: "cash" | "visa";
}

export default function Checkout() {
  const {
    numberOfCartItems,
    cartId,
    totalPriceOfCart,
    cartProducts,
    setcartProducts,
  } = useContext(cartContext);

  const form = useForm<FormValues>({
    defaultValues: {
      city: "",
      details: "",
      phone: "",
      paymentMethod: "cash",
    },
  });

  const selectedPayment = form.watch("paymentMethod");

  async function handlePayment(value :FormValues) {
    console.log(value);
    const userData: shippingAddressType = {
      shippingAddress: {
        details: value.details,
        phone: value.phone,
        city: value.city,
      },
    };

    if (value.paymentMethod == "cash") {
      const res = await createOrderCash(cartId, userData);
      console.log("cash", res);
    } else if (value.paymentMethod == "visa") {
      const res = await createOrderCredit(cartId, userData);
      console.log("visa", res);
      window.open(res.session.url)

    }
  }

  return (
    <form onSubmit={form.handleSubmit(handlePayment)}>
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/cart">Cart</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">Checkout</span>
            </nav>

            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <span className="bg-gradient-to-br from-green-600 to-green-700 text-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg">
                  <FaReceipt />
                </span>
                Complete Your Order
              </h1>

              <Link
                href="/cart"
                className="flex items-center gap-2 text-green-600 hover:underline"
              >
                <FaArrowLeft />
                Back to Cart
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping */}
              <div className="bg-white rounded-3xl shadow-lg border overflow-hidden">
                <div className="bg-green-600 text-white p-5 flex items-center gap-2">
                  <FaHouse />
                  Shipping Address
                </div>

                <div className="p-6 space-y-4">
                  <div className="bg-blue-50 p-3 rounded-xl flex gap-2 items-center">
                    <FaInfoCircle className="text-blue-500" />
                    <p className="text-sm">Please enter correct address</p>
                  </div>

                  {/* City */}
                  <Controller
                    name="city"
                    control={form.control}
                    rules={{ required: "City is required" }}
                    render={({ field, fieldState }) => (
                      <div>
                        <input
                          {...field}
                          placeholder="City"
                          className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                        />
                        {fieldState.error && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldState.error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  {/* Address */}
                  <Controller
                    name="details"
                    control={form.control}
                    rules={{ required: "Address is required" }}
                    render={({ field, fieldState }) => (
                      <div>
                        <textarea
                          {...field}
                          placeholder="Street Address"
                          className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                        />
                        {fieldState.error && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldState.error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />

                  {/* Phone */}
                  <Controller
                    name="phone"
                    control={form.control}
                    rules={{
                      required: "Phone is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Phone must be numbers only",
                      },
                      minLength: {
                        value: 11,
                        message: "Phone must be 11 digits",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <div>
                        <input
                          {...field}
                          placeholder="Phone"
                          className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
                        />
                        {fieldState.error && (
                          <p className="text-red-500 text-sm mt-1">
                            {fieldState.error.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Payment */}
              <Controller
                name="paymentMethod"
                control={form.control}
                render={({ field }) => (
                  <div className="space-y-4">
                    {/* Cash */}
                    <label
                      className={`cursor-pointer border-2 p-4 rounded-2xl flex items-center gap-3
        ${
          field.value === "cash"
            ? "border-green-500 bg-green-50"
            : "border-gray-200"
        }
        `}
                    >
                      <input
                        type="radio"
                        value="cash"
                        checked={field.value === "cash"}
                        onChange={field.onChange}
                        className="hidden"
                      />

                      <FaMoneyBill className="text-green-600" />
                      <div className="flex-1">
                        <p className="font-semibold">Cash on Delivery</p>
                        <p className="text-sm text-gray-500">
                          Pay when delivered
                        </p>
                      </div>

                      {field.value === "cash" && <FaCheck />}
                    </label>

                    {/* Visa */}
                    <label
                      className={`cursor-pointer border-2 p-4 rounded-2xl flex items-center gap-3
        ${
          field.value === "visa"
            ? "border-green-500 bg-green-50"
            : "border-gray-200"
        }
        `}
                    >
                      <input
                        type="radio"
                        value="visa"
                        checked={field.value === "visa"}
                        onChange={field.onChange}
                        className="hidden"
                      />

                      <FaCreditCard />
                      <div className="flex-1">
                        <p className="font-semibold">Pay Online</p>
                        <p className="text-sm text-gray-500">
                          Credit / Debit Card
                        </p>
                      </div>

                      {field.value === "visa" && <FaCheck />}
                    </label>
                  </div>
                )}
              />
            </div>

            {/* RIGHT */}
            <div>
              <div className="bg-white rounded-3xl shadow-lg border sticky top-4 overflow-hidden">
                <div className="bg-green-600 text-white p-5 flex items-center gap-2">
                  <FaShoppingBag />
                  Order Summary
                </div>

                <div className="p-5 space-y-3">
                  <div className="overflow-auto max-h-72">
                    {cartProducts.map((item: CartItemType) => (
                      <>
                        <div className="flex  items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                          {/* Image */}
                          <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                            <Image
                              src={item.product.imageCover}
                              alt={item.product.title}
                              width={46}
                              height={46}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {item.product.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {item.price} EGP
                            </p>
                          </div>

                          {/* Total */}
                          <p className="text-sm font-bold text-gray-900 shrink-0">
                            {item.price} EGP
                          </p>
                        </div>
                      </>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{totalPriceOfCart} EGP</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="flex items-center gap-1">
                        <FaTruck /> Shipping
                      </span>
                      <span className="text-green-600">Free</span>
                    </div>

                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>{totalPriceOfCart} EGP</span>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={!form.formState.isValid}
                    className="w-full cursor-pointer mt-4 bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    <FaBox />
                    {selectedPayment === "visa"
                      ? "Proceed to Payment"
                      : "Place Order"}
                  </button>

                  <div className="flex justify-center gap-4 text-xs text-gray-500 mt-4">
                    <span className="flex items-center gap-1">
                      <FaShieldAlt /> Secure
                    </span>
                    <span className="flex items-center gap-1">
                      <FaTruck /> Fast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
