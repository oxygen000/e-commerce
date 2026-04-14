"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../../_components/Home/ProductCard";
import { ProductType } from "@/types/Products";

type SimilarProductClientProps = {
  products: ProductType[];
};

export default function SimilarProductClient({
  products,
}: SimilarProductClientProps) {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            You May Also <span className="text-green-600">Like</span>
          </h2>

          <div className="flex gap-2">
            <button className="prev h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
              <FaChevronLeft />
            </button>
            <button className="next h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={5}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
        >
          {products.map((product: ProductType) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
