import { FaTruck, FaShieldAlt, FaUndoAlt, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaTruck className="text-xl" />,
    title: "Free Shipping",
    desc: "On orders over 500 EGP",
    bg: "bg-blue-50 text-blue-500",
  },
  {
    icon: <FaShieldAlt className="text-xl" />,
    title: "Secure Payment",
    desc: "100% secure transactions",
    bg: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: <FaUndoAlt className="text-xl" />,
    title: "Easy Returns",
    desc: "14-day return policy",
    bg: "bg-orange-50 text-orange-500",
  },
  {
    icon: <FaHeadset className="text-xl" />,
    title: "24/7 Support",
    desc: "Dedicated support team",
    bg: "bg-purple-50 text-purple-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${feature.bg}`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}