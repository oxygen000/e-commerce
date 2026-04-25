"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { OrderType } from "@/types/orders";

export default function BtnDataOrdrt({ order }: { order: OrderType }) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" rounded-2xl bg-white">
      <div className="p-5 sm:p-6 flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 hover:bg-gray-200 transition"
        >
          Details
          <FaChevronDown
            className={`text-xs transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-gray-50/50">
          <div className="p-5 sm:p-6">
            <h4 className="font-semibold text-gray-900 text-sm mb-4">
              Order Items
            </h4>

            <div className="space-y-3">
              {order.cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border"
                >
                  <div className="w-16 h-16 rounded-xl bg-gray-50 p-2">
                    <Image
                      src={item.product.imageCover}
                      alt={item.product.title}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">
                      {item.product.title}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      <span className="font-medium text-gray-700">
                        {item.count}
                      </span>{" "}
                      × {item.price} EGP
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      {item.price * item.count}
                    </p>
                    <p className="text-xs text-gray-400">EGP</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="p-4 bg-white rounded-xl border">
                <h4 className="font-semibold text-sm mb-2">
                  Delivery Address
                </h4>
                <p>{order.shippingAddress.city}</p>
                <p className="text-sm text-gray-600">
                  {order.shippingAddress.details}
                </p>
                <p className="text-sm text-gray-600">
                  {order.shippingAddress.phone}
                </p>
              </div>

              {/* Summary */}
              <div className="p-4 bg-amber-100 rounded-xl border">
                <h4 className="font-semibold text-sm mb-2">Order Summary</h4>

                <div className="flex justify-between">
                  <span>Total</span>
                  <span className="font-bold">
                    {order.totalOrderPrice} EGP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}