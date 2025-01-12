import Image from "next/image";
import HeoSection from "./components/HeroSection";
import FooterSection from "./components/FooterSection";
import FeaturesSection from "./components/FeaturesSection";
import DetailsSection from "./components/DetailsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <HeoSection />
      <DetailsSection />
      <FeaturesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
