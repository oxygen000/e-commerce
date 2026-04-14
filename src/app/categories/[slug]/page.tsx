import Image from "next/image";
import { FaLayerGroup } from "react-icons/fa";
import Breadcrumb from "../Breadcrumb";
import { getCategoryById } from "@/app/_actions/getCategory";




export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;

  const category = await getCategoryById(slug);

  if (!category) {
    return <p className="text-center py-20">Category not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="bg-gradient-to-br from-[#18A74C] via-[#2BCA65] to-[#47DC7D] text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          {/* Breadcrumb */}
         <Breadcrumb category={category} pathSegments={['categories']}/>

          {/* Title */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shadow-xl overflow-hidden">
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaLayerGroup className="w-8 h-8 text-white" />
              )}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">{category.name}</h1>
              <p className="text-white/80 mt-1">
                Browse our wide range of products in {category.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* هنا ممكن تعرض المنتجات أو التفاصيل الخاصة بالكاتيجوري */}
      <div className="container mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg">
          Details about {category.name}...
        </p>
      </div>
    </div>
  );
}