import { FaStar, FaTruck, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import ReviewAuthor from "@/assets/img/review-author.webp";
import  RegisterForm  from "./RegisterForm";



export default function page() {
  return (
    <>
    <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
      
      <div>
  <h1 className="text-4xl font-bold">
    Welcome to <span style={{ color: "#16A34A" }}>FreshCart</span>
  </h1>

  <p className="text-xl mt-2 mb-4">
    Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
  </p>

  <ul className="space-y-6 my-8">
    
    {/* ITEM 1 */}
    <li className="flex items-start gap-4">
      <div className="size-12 bg-green-100 text-[#16A34A] rounded-full flex justify-center items-center">
        <FaStar />
      </div>
      <div>
        <h2 className="text-lg font-semibold">Premium Quality</h2>
        <p className="text-gray-600">
          Premium quality products sourced from trusted suppliers.
        </p>
      </div>
    </li>

    {/* ITEM 2 */}
    <li className="flex items-start gap-4">
      <div className="size-12 bg-green-100 text-[#16A34A] rounded-full flex justify-center items-center">
        <FaTruck />
      </div>
      <div>
        <h2 className="text-lg font-semibold">Fast Delivery</h2>
        <p className="text-gray-600">
          Same-day delivery available in most areas
        </p>
      </div>
    </li>

    {/* ITEM 3 */}
    <li className="flex items-start gap-4">
      <div className="size-12 bg-green-100 text-[#16A34A] rounded-full flex justify-center items-center">
        <FaShieldAlt />
      </div>
      <div>
        <h2 className="text-lg font-semibold">Secure Shopping</h2>
        <p className="text-gray-600">
          Your data and payments are completely secure
        </p>
      </div>
    </li>

  </ul>

  {/* REVIEW */}
  <div className="bg-white shadow-sm p-4 rounded-md">
    
    <div className="flex items-center gap-4 mb-4">
      <Image
        src={ReviewAuthor}
        className="size-12 rounded-full"
        alt="author"
        width={48}
        height={48}
      />

      <div>
        <h3>Sarah Johnson</h3>

        <div className="flex text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
      </div>
    </div>

    <blockquote>
      <p className="italic text-gray-600">
        &quot;FreshCart has transformed my shopping experience. The quality of the products is outstanding, and the delivery is always on time. Highly recommend!&quot;
      </p>
    </blockquote>
  </div>
</div>

      {/* RIGHT SIDE (FORM) */}
      <RegisterForm />
    </div>
    
    </>
  )
}
