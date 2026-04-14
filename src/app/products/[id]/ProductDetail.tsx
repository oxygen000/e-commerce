import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaRegStar,
  FaPlus,
  FaMinus,
  FaShoppingCart,
  FaBolt,
  FaHeart,
  FaShareAlt,
  FaTruck,
  FaUndo,
  FaShieldAlt,
} from "react-icons/fa";
import { getProductData } from "../../_actions/getSingleProductsActon";
import ProductGallery from "./ProductGallery";

export default async function ProductDetail({ id }: { id: string }) {
  const product = await getProductData(id);

  return (
    <section id="product-detail" className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Images */}
          <div className="lg:w-1/4">
          <ProductGallery product={product} />
          </div>

          {/* Info */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Category */}
              <div className="flex gap-2 mb-4">
                {product.subcategory.map((sub) => (
                  <Link
                    key={sub._id}
                    href={`/categories/${sub._id}`}
                    className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-100 mr-2"
                  >
                    {sub.name}
                  </Link>
                ))}
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                  {product.brand.name}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold mb-3">Woman Shawl</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <span className="text-gray-600 text-sm ml-2">
                  {product.ratingsAverage} (5 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold">{product.price} EGP</span>
              </div>

              {/* Stock */}
              <div className="mb-4">
                <span className="flex items-center gap-2 text-sm bg-green-50 text-green-700 px-3 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  In Stock
                </span>
              </div>

              {/* Description */}
              <div className="border-t pt-4 mb-4 text-gray-600">
                <p>{product.description}</p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium">Quantity</p>
                <div className="flex items-center gap-4">
                  <div className="flex border rounded-lg overflow-hidden">
                    <button className="px-4 cursor-pointer py-2 hover:bg-gray-100">
                      <FaMinus />
                    </button>
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-16 text-center outline-none"
                    />
                    <button className="px-4 cursor-pointer py-2 hover:bg-gray-100">
                      <FaPlus />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.quantity} available
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6 flex justify-between">
                <span>Total Price:</span>
                <span className="text-green-600 text-xl font-bold">
                  {product.price} EGP
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 cursor-pointer bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700">
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <button className="flex-1 cursor-pointer bg-gray-900 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800">
                  <FaBolt />
                  Buy Now
                </button>
              </div>

              {/* Wishlist */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 border cursor-pointer py-3 rounded-xl flex items-center justify-center gap-2 hover:text-green-600 hover:border-green-400">
                  <FaHeart />
                  Wishlist
                </button>
                <button className="border px-4 rounded-xl cursor-pointer hover:text-green-600">
                  <FaShareAlt />
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-6 grid sm:grid-cols-3 gap-4">
                <div className="flex gap-3 items-center">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full">
                    <FaTruck />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Free Delivery</p>
                    <p className="text-xs text-gray-500">Orders over $50</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full">
                    <FaUndo />
                  </div>
                  <div>
                    <p className="text-sm font-medium">30 Days Return</p>
                    <p className="text-xs text-gray-500">Money back</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="bg-green-100 text-green-600 p-3 rounded-full">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Secure Payment</p>
                    <p className="text-xs text-gray-500">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
