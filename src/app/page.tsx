import CategoriesSection from "./_components/Home/CategoriesSection";
import DealsSection from "./_components/Home/DealsSection";
import FeaturesSection from "./_components/Home/FeaturesSection";
import HeroSlider from "./_components/Home/HeroSlider";
import FeaturedProducts from "./_components/Home/FeaturedProducts";
import NewsletterSection from "./_components/Home/NewsletterSection";
import { getMyToken } from "@/utils/getMyToken";

export default function Home() {
    getMyToken()
  
  return (
    <>
      <div className="">
        <HeroSlider />
        <FeaturesSection />
        <CategoriesSection />
        <DealsSection />
        <FeaturedProducts />
        <NewsletterSection />
      </div>
    </>
  );
}
