import type { ReactNode } from "react";
import Footer from "@/components/marketing/footer/Footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
