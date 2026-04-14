import LoginForm from "./LoginForm";
import Image from "next/image";
import ImageLogin from "@/assets/img/loginimg.png";
import { FaTruck, FaShieldAlt, FaClock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="container py-16 mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="hidden lg:block">
          <div className="text-center space-y-6">
            <Image
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              alt="fresh vegetables and fruits shopping cart illustration"
              src={ImageLogin}
              width={600}
              height={384}
            />

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                FreshCart - Your One-Stop Shop for Fresh Products
              </h2>

              <p className="text-lg text-gray-600">
                Join thousands of happy customers who trust FreshCart for their
                daily grocery needs
              </p>

              <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <FaTruck className="text-green-600" />
                  Free Delivery
                </div>

                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-green-600" />
                  Secure Payment
                </div>

                <div className="flex items-center gap-2">
                  <FaClock className="text-green-600" />
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <LoginForm />
      </div>
    </div>
  );
}
