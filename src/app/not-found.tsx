"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaAppleAlt,
  FaCarrot,
  FaLemon,
  FaSeedling,
  FaShoppingCart,
  FaHome,
  FaArrowLeft,
} from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center px-4 py-16 relative overflow-hidden">
      
      {/* floating icons */}
      <div className="absolute inset-0 overflow-hidden">

        <FaAppleAlt className="absolute top-[10%] left-[5%] text-green-200 text-4xl animate-float" />

        <FaCarrot className="absolute top-[20%] right-[10%] text-green-200 text-3xl animate-float2" />

        <FaLemon className="absolute bottom-[25%] left-[8%] text-green-200 text-3xl animate-float3" />

        <FaSeedling className="absolute bottom-[15%] right-[15%] text-green-200 text-4xl animate-float4" />

        <FaAppleAlt className="absolute top-[50%] left-[15%] text-green-100 text-2xl animate-float5" />

        <FaCarrot className="absolute top-[40%] right-[5%] text-green-100 text-2xl animate-float2" />

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-green-100/40 to-transparent rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-100/30 to-transparent rounded-full blur-3xl"></div>

      </div>

      <div className="relative z-10 max-w-xl w-full">

        <div className="flex justify-center mb-10">
          <div className="relative">

            <div className="absolute inset-0 w-72 h-60 bg-green-100/50 rounded-[32px] blur-2xl"></div>

            <div className="relative w-72 h-60">

              <div className="absolute inset-x-0 top-4 mx-auto w-60 h-44 bg-white rounded-3xl shadow-xl border flex items-center justify-center overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-transparent to-green-100/40"></div>

                <FaShoppingCart className="relative text-7xl text-green-400/80" />

              </div>

              <div className="absolute -top-2 -right-2">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-white shadow-lg"></div>

                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-black text-white">404</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="w-8 h-4 border-b-[3px] border-green-400 rounded-b-full"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>

            </div>
          </div>
        </div>

        <div className="text-center mb-10">

          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Oops! Nothing Here
          </h1>

          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Looks like this page went out of stock! Don&apos;t worry, there&apos;s plenty
            more fresh content to explore.
          </p>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

          <Link
            href="/"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            <FaHome className="group-hover:scale-110 transition" />
            Go to Homepage
          </Link>

          <button
            onClick={() => router.back()}
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 py-4 px-8 rounded-2xl font-bold text-lg border shadow-md hover:-translate-y-1"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition" />
            Go Back
          </button>

        </div>

        <div className="bg-white rounded-3xl border shadow-sm p-6">

          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Popular Destinations
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            <Link
              href="/products"
              className="px-5 py-2.5 rounded-xl bg-green-50 text-green-700 font-semibold text-sm hover:bg-green-100"
            >
              All Products
            </Link>

            <Link
              href="/categories"
              className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200"
            >
              Categories
            </Link>

            <Link
              href="/deals"
              className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200"
            >
              Today&apos;s Deals
            </Link>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}
