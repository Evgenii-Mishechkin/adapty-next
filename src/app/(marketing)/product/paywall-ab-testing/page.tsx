import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "A/B-тесты пейволлов | Adapty",
};

export default function PaywallAbTestingPage() {
  return (
    <Section>
      <Container className="space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#7b4ffe] ring-1 ring-[#e7ddf7]">
          Продукт
        </p>
        <h1 className="text-4xl font-bold text-[#2b2141]">
          Больше про A/B-тесты
        </h1>
        <p className="max-w-2xl text-lg text-[#4b405a]">
          Здесь появятся сценарии экспериментов, шаблоны пейволлов и результаты
          тестов.
        </p>
      </Container>
    </Section>
  );
}
