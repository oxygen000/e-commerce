"use client";

import { IconType } from "react-icons";
import {
  FaTruck,
  FaUndoAlt,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

type FeatureItem = {
  icon: IconType;
  title: string;
  desc: string;
};

const features: FeatureItem[] = [
  {
    icon: FaTruck,
    title: "Free Shipping",
    desc: "On orders over 500 EGP",
  },
  {
    icon: FaUndoAlt,
    title: "Easy Returns",
    desc: "14-day return policy",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Payment",
    desc: "100% secure checkout",
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    desc: "Contact us anytime",
  },
];

export default function FeaturesBar() {
  return (
    <div className="bg-[#F0FDF4] border-y border-[#16A34A]/10">
      <div className="container mx-auto px-4 py-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <Icon className="text-[#16A34A]  text-lg" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-xs">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}