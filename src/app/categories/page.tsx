import Image from "next/image";
import Link from "next/link";
import { FaLayerGroup } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";
import { getAllCategories } from "../_actions/categoriesAction";

export default async function categories() {
  const categories = await getAllCategories();
   const pathSegments = ["categories"];


  return (
    <>
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#18A74C] via-[#2BCA65] to-[#47DC7D] text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          {/* Breadcrumb */}
          <Breadcrumb pathSegments={pathSegments}/>

          {/* Title */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shadow-xl">
              <FaLayerGroup className="w-8 h-8 text-white"/>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                All Categories
              </h1>
              <p className="text-white/80 mt-1">
                Browse our wide range of product categories
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* Categories Grid */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/categories/${cat._id}`}
                className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={180}
                    height={180}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-center group-hover:text-[#18A74C] transition-colors">
                  {cat.name}
                </h3>

                {/* Hover Text */}
                <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-[#18A74C] flex items-center gap-1">
                    View Subcategories →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </div>
    </>
  );
}
