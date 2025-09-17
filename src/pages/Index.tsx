import LucifyHeader from "@/components/LucifyHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import SolutionsGrid from "@/components/SolutionsGrid";
import StatsSection from "@/components/StatsSection";
import BrandsSection from "@/components/BrandsSection";
import FocusSection from "@/components/FocusSection";
import TechInsightsSection from "@/components/TechInsightsSection";
import PartnersSection from "@/components/PartnersSection";
import LucifyFooter from "@/components/LucifyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <LucifyHeader />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SolutionsGrid />
      <StatsSection />
      <BrandsSection />
      <FocusSection />
      <TechInsightsSection />
      <PartnersSection />
      <LucifyFooter />
    </div>
  );
};

export default Index;
