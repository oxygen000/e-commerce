import Link from "next/link";
import {
  FaLock,
  FaEnvelope,
  FaShieldAlt,
  FaKey,
  FaArrowLeft,
} from "react-icons/fa";

export default function page() {
  return (
    <>
    <div
  id="forgot-password-section"
  className="container py-16 mx-auto px-4"
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
    
    {/* LEFT SIDE */}
    <div className="hidden lg:block">
      <div className="text-center space-y-6">

        <div className="w-full h-96 bg-gradient-to-br from-green-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
          
          <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-green-100/50"></div>
          <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50"></div>
          <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-green-100/50"></div>

          <div className="relative flex flex-col items-center gap-6 z-10">
            
            <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform">
              <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">
                <FaLock className="text-green-600 text-4xl" />
              </div>
            </div>

            <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
              <FaEnvelope className="text-green-500 text-xl" />
            </div>

            <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
              <FaShieldAlt className="text-green-500 text-xl" />
            </div>

            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse [animation-delay:150ms]"></div>
              <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse [animation-delay:300ms]"></div>
            </div>

          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Reset Your Password
          </h2>

          <p className="text-lg text-gray-600">
            Don&apos;t worry, it happens to the best of us. We&apos;ll help you get back into your account in no time.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">

            <div className="flex items-center">
              <FaEnvelope className="text-green-600 mr-2" />
              Email Verification
            </div>

            <div className="flex items-center">
              <FaShieldAlt className="text-green-600 mr-2" />
              Secure Reset
            </div>

            <div className="flex items-center">
              <FaLock className="text-green-600 mr-2" />
              Encrypted
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-green-600">
              Fresh<span className="text-gray-800">Cart</span>
            </span>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Forgot Password?
          </h1>

          <p className="text-gray-600">
            No worries, we&apos;ll send you a reset code
          </p>
        </div>

        {/* STEPS */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 text-white ring-4 ring-green-100">
              <FaEnvelope className="text-xs" />
            </div>

            <div className="w-16 h-0.5 mx-2 bg-gray-200"></div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-400">
              <FaKey className="text-xs" />
            </div>

            <div className="w-16 h-0.5 mx-2 bg-gray-200"></div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-400">
              <FaLock className="text-xs" />
            </div>
          </div>
        </div>

        {/* FORM */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition font-semibold text-lg shadow-lg"
          >
            Send Reset Code
          </button>

          <div className="text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium"
            >
              <FaArrowLeft className="text-xs" />
              Back to Sign In
            </Link>
          </div>
        </form>

        {/* FOOTER */}
        <div className="text-center mt-8 pt-6 border-t border-gray-100">
          <p className="text-gray-600">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>

  </div>
</div>
    
    </>
  )
}
