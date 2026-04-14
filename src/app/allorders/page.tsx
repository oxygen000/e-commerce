import Link from "next/link";
import {
  FaBox,
  FaCheckCircle,
  FaChevronDown,
  FaClock,
  FaCreditCard,
  FaHashtag,
  FaMoneyBill,
  FaTruck,
} from "react-icons/fa";
import { getUserOrders } from "../_actions/getUserOrdersAction";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import BtnDataOrdrt from "./BtnDataOrdrt";

export default async function MyOrders() {
  const orders = await getUserOrders();
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">My Orders</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white">
              <FaBox size={22} />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                My Orders
              </h1>
              <p className="text-gray-500 text-sm">
                Track and manage your orders
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-green-50 transition text-sm"
          >
            Continue Shopping
          </Link>
        </div>
      </div>

      {/* Orders */}
      <div className="space-y-4">
        {orders.map((order) => {
          const firstImage = order.cartItems?.[0]?.product?.imageCover;

          return (
            <div
              key={order._id}
              className="p-5 sm:p-6 border rounded-2xl bg-white shadow-sm"
            >
              <div className="flex gap-5">
                {/* Image */}
                <div className="relative shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gray-50 border p-2 overflow-hidden">
                    {firstImage && (
                      <Image
                        src={firstImage}
                        alt="product"
                        width={120}
                        height={120}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    +{order.cartItems.length}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* status + order id */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div>
                        {(!order.isPaid && (
                          <div className="bg-amber-100 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-2">
                            <FaClock className="text-amber-600 text-xs" />
                            <span className="text-xs font-semibold text-amber-600">
                              Processing
                            </span>
                          </div>
                        )) ||
                          (order.isPaid && !order.isDelivered && (
                            <div className="bg-blue-100 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-2">
                              <FaTruck className="text-blue-600 text-xs" />
                              <span className="text-xs font-semibold text-blue-600">
                                On the way
                              </span>
                            </div>
                          )) ||
                          (order.isDelivered && (
                            <div className="bg-green-100 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-2">
                              <FaCheckCircle className="text-green-600 text-xs" />
                              <span className="text-xs font-semibold text-green-600">
                                Completed
                              </span>
                            </div>
                          ))}
                      </div>

                      <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                        <FaHashtag className="text-gray-400 text-xs" />
                        {order.id}
                      </h3>
                    </div>

                    <div>
                      {order.paymentMethodType === "cash" ? (
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100">
                          <FaMoneyBill className="text-gray-600" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-200">
                          <FaCreditCard className="text-purple-700" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* meta */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarDays className="text-gray-400 text-xs" />
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </span>

                    <span className="w-1 h-1 rounded-full bg-gray-300" />

                    <span className="flex items-center gap-1.5">
                      <FaBox className="text-gray-400 text-xs" />
                      {order.cartItems.length} items
                    </span>

                    <span className="w-1 h-1 rounded-full bg-gray-300" />

                    <span className="flex items-center gap-1.5">
                      <FaLocationDot className="text-gray-400 text-xs" />
                      {order.shippingAddress.city}
                    </span>
                  </div>

                  {/* price + button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {order.totalOrderPrice}
                      </span>
                      <span className="text-sm text-gray-400 ml-1">EGP</span>
                    </div>
                  </div>
                </div>
              </div>
                  <BtnDataOrdrt order={order} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
