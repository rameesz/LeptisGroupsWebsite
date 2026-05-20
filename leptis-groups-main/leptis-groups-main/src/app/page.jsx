import ConsultSection from "@/components/ConsultSection";
import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import Loader from "@/components/Loader";
import OurBrands from "@/components/OurBrands";
import OurTeam from "@/components/OurTeam";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <OurBrands />
        <HomeAboutSection />
        <ConsultSection />
        <OurTeam />
      </Suspense>
    </main>
  );
}
