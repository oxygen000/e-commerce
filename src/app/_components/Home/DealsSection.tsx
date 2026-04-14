import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function DealsSection() {
  const deals = [
    {
      title: "Fresh Organic Fruits",
      subtitle: "Deal of the Day",
      emoji: "🔥",
      description: "Get up to 40% off on selected organic fruits",
      discount: "40% OFF",
      code: "ORGANIC40",
      bgGradient: "from-emerald-500 to-emerald-700",
      textColor: "text-emerald-600",
      link: "/products",
      linkText: "Shop Now",
    },
    {
      title: "Exotic Vegetables",
      subtitle: "New Arrivals",
      emoji: "✨",
      description: "Discover our latest collection of premium vegetables",
      discount: "25% OFF",
      code: "FRESH25",
      bgGradient: "from-orange-400 to-rose-500",
      textColor: "text-orange-500",
      link: "/products?sort=newest",
      linkText: "Explore Now",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {deals.map((deal, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${deal.bgGradient} p-8 text-white`}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                <span>{deal.emoji}</span>
                <span>{deal.subtitle}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{deal.title}</h3>
              <p className="text-white/80 mb-4">{deal.description}</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold">{deal.discount}</div>
                <div className="text-sm text-white/70">
                  Use code: <span className="font-bold text-white">{deal.code}</span>
                </div>
              </div>
              <Link
                href={deal.link}
                className={`inline-flex items-center gap-2 bg-white ${deal.textColor} px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors`}
              >
                {deal.linkText} <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}