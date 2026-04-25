import Link from "next/link";
import Image from "next/image";
import { FaEye, FaStar, FaRegStar } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { ProductType } from "@/types/Products";
import ButtonAddToCard from "./ButtonAddToCard";
import ButtonAddToWishlist from "./ButtonAddToWishlist";

interface ProductCardPropsType {
  product: ProductType;
}

function getDiscountPercentage(price: number, priceAfterDiscount: number) {
  if (!priceAfterDiscount || priceAfterDiscount >= price) return 0;

  return Math.round(((price - priceAfterDiscount) / price) * 100);
}

export default function ProductCard({ product }: ProductCardPropsType) {
  return (
    <>
      <div
        key={product.id}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden transition hover:shadow-lg"
      >
        {product.priceAfterDiscount && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
                 Save {""}
                {getDiscountPercentage(
                  product.price,
                  product.priceAfterDiscount,
                )}
                %
              </span>
            )}
        <div className="relative">
          <Image
            src={product.imageCover || product.image[0]}
            alt={product.title}
            width={400}
            height={300}
            className="w-full h-60 object-contain bg-white"
          />

          {/* Actions */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <ButtonAddToWishlist productId={product.id} />

            <button className="bg-white cursor-pointer h-8 w-8 rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-green-600 transition">
              <FaArrowsRotate size={14} />
            </button>

            <Link
              href={`/products/${product.id}`}
              className="bg-white h-8 w-8 rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-green-600 transition"
            >
              <FaEye size={14} />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">
            {product.category?.name || "Unknown"}
          </div>

          <h3 className="font-medium mb-1 cursor-pointer">
            <Link
              href={`/products/${product.id}`}
              className="line-clamp-2 hover:text-green-600"
            >
              {product.title}
            </Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[1, 2, 3, 4, 5].map((star) =>
                star <= Math.round(product.ratingsAverage || 0) ? (
                  <FaStar key={star} />
                ) : (
                  <FaRegStar key={star} />
                ),
              )}
            </div>

            <span className="text-xs text-gray-500">
              {product.ratingsAverage?.toFixed(1) || "0.0"} (
              {product.ratingsQuantity || 0})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-800">
              {product.priceAfterDiscount || product.price} EGP
            </span>

            {product.priceAfterDiscount && (
              <span className="text-sm text-red-500 line-through">
                {product.price} EGP
              </span>
            )}

            

            <ButtonAddToCard productId={product.id} />
          </div>
        </div>
      </div>
    </>
  );
}
