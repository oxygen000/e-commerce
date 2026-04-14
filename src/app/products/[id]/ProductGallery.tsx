"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductDataType } from "@/types/ProductData";

export default function ProductGallery({
  product,
}: {
  product: ProductDataType;
}) {
  const [mainImage, setMainImage] = useState(product.imageCover);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4 overflow-hidden ">
      {/* Main Image */}
      <div className="mb-4 w-full h-[400px] relative overflow-hidden rounded-lg">
        <Image
          src={mainImage}
          alt={product.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto">
        {[product.imageCover, ...product.images].map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="thumb"
            width={80}
            height={80}
            onClick={() => setMainImage(img)}
            className={`rounded-md cursor-pointer border hover:border-green-500 transition ${
              mainImage === img ? "border-green-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
