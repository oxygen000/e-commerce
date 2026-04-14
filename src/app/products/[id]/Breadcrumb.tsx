import { getProductData } from "@/app/_actions/getSingleProductsActon";
import Link from "next/link";
import { FaHome, FaChevronRight } from "react-icons/fa";

export default async function Breadcrumb({ id }: { id: string }) {
    const product = await getProductData(id);
  
  return (
    <>
     <nav aria-label="Breadcrumb" className="py-4">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          
          {/* Home */}
          <li className="flex items-center">
            <Link
              href="/"
              className="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5"
            >
              <FaHome className="text-xs" />
              Home
            </Link>
            <FaChevronRight className="text-gray-400 text-xs mx-2" />
          </li>

          {/* Women's Fashion */}
          <li className="flex items-center">
            <Link
              href="/categories/6439d58a0049ad0b52b9003f"
              className="text-gray-500 hover:text-green-600 transition"
            >
              Women&apos;s Fashion
            </Link>
            <FaChevronRight className="text-gray-400 text-xs mx-2" />
          </li>

          {/* Women's Clothing */}
          <li className="flex items-center">
            <Link
              href="/categories/6439d58a0049ad0b52b9003f/6407f1bcb575d3b90bf95797"
              className="text-gray-500 hover:text-green-600 transition"
            >
              Women&apos;s Clothing
            </Link>
            <FaChevronRight className="text-gray-400 text-xs mx-2" />
          </li>

          {/* Current Page */}
          <li className="text-green-700 font-medium truncate max-w-xs">
            {product.title}
          </li>

        </ol>
      </div>
    </nav>
    </>
   
  );
}