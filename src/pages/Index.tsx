import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import AgentsModulesSection from "@/components/AgentsModulesSection";
import PlatformFeaturesSection from "@/components/PlatformFeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TargetAudienceSection />
      <div id="solucao">
        <AgentsModulesSection />
      </div>
      <div id="recursos">
        <PlatformFeaturesSection />
      </div>
      <div id="planos">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
