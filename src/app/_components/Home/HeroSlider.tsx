"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeroImg from "@images/heroimg.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  title: string;
  desc: string;
  image: StaticImageData;
  btn1: string;
  btn2: string;
};

const slides: Slide[] = [
  {
    title: "Fresh Products Delivered to your Door",
    desc: "Get 20% off your first order",
    image: HeroImg,
    btn1: "Shop Now",
    btn2: "View Deals",
  },
  {
    title: "Premium Quality Guaranteed",
    desc: "Fresh from farm to your table",
    image: HeroImg,
    btn1: "Shop Now",
    btn2: "Learn More",
  },
  {
    title: "Fast & Free Delivery",
    desc: "Same day delivery available",
    image: HeroImg,
    btn1: "Order Now",
    btn2: "Delivery Info",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        loop
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="w-full h-[400px]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[400px] flex items-center">

              <Image
                src={slide.image}
                alt="hero"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#00C950E5] to-[#05DF7280] flex items-center">
                <div className="max-w-6xl mx-auto px-6 w-full text-left text-white">

                  <h2 className="text-4xl font-bold mb-4 max-w-xl">
                    {slide.title}
                  </h2>

                  <p className="text-lg">
                    {slide.desc}
                  </p>

                  <div className="mt-6 flex gap-4">
                    <Link
                      href="/products"
                      className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
                    >
                      {slide.btn1}
                    </Link>

                    <Link
                      href="/deals"
                      className="border border-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
                    >
                      {slide.btn2}
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
        <FaChevronLeft className="text-lg" />
      </div>

      <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
        <FaChevronRight className="text-lg" />
      </div>
    </div>
  );
}