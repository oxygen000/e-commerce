import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { getAllCategories } from '@/app/_actions/categoriesAction';



export default async function CategoriesSection() {
    const categories = await getAllCategories();
  
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
        <div className="flex items-center gap-3 my-8">
          <div className="h-8 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Shop By <span className="text-emerald-600">Category</span>
          </h2>
        </div>
        <Link
          href="/categories"
          className="text-emerald-600 self-end sm:self-auto hover:text-emerald-700 font-medium flex items-center cursor-pointer"
        >
          View All Categories <FaArrowRight className="ml-2" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat, idx) => (
          <Link key={idx} href={`/${cat.slug}`} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer">
            <div className="h-20 w-20 overflow-hidden bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-200 transition">
              <Image
                src={cat.image}
                alt={cat.name}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-medium">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}