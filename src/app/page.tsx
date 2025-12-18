import type { Metadata } from "next";
import HeroSection from "@/components/marketing/home/HeroSection";
import ManageBusinessSection from "@/components/marketing/home/ManageBusinessSection";
import StatsSection from "@/components/marketing/home/StatsSection";
import IntegrationSection from "@/components/marketing/home/IntegrationSection";
import SdkGridSection from "@/components/marketing/home/SdkGridSection";
import AbTestingSection from "@/components/marketing/home/AbTestingSection";
import RefundSaverSection from "@/components/marketing/home/RefundSaverSection";
import CaseStudiesGrid from "@/components/marketing/home/CaseStudiesGrid";
import Footer from "@/components/marketing/footer/Footer";

export const metadata: Metadata = {
  title: "Adapty | Платформа для роста мобильных приложений",
  description:
    "Платформа для подписок: paywall-эксперименты, аналитика и управление в одном месте.",
};

export default function Page() {
  return (
    <main className="bg-[#f6f2ef] min-h-screen">
      <HeroSection />
      <ManageBusinessSection />
      <StatsSection />
      <IntegrationSection />
      <SdkGridSection />
      <AbTestingSection />
      <RefundSaverSection />
      <CaseStudiesGrid />
      <Footer />
    </main>
  );
}
