import FooterCta from "./FooterCta";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0f0d14] text-white">
      <div className="border-b border-[#1f1a2d]">
        <FooterCta />
      </div>
      <Container className="space-y-10 py-10">
        <FooterSocial />
        <FooterNav />
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#8b8497]">
          <p>© {new Date().getFullYear()} Adapty Tech Inc.</p>
          <div className="ml-auto inline-flex items-center gap-2 rounded-lg border border-[#1f1a2d] px-3 py-2 text-xs text-white">
            <span className="h-4 w-6 rounded-sm bg-gradient-to-r from-[#3c6cf5] via-white to-[#e53935]" />
            Русский
          </div>
        </div>
      </Container>
    </footer>
  );
}
