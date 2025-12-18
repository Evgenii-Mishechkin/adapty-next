import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Запись на демо | Adapty",
};

export default function ScheduleDemoPage() {
  return (
    <Section>
      <Container className="space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#7b4ffe] ring-1 ring-[#e7ddf7]">
          Маркетинг
        </p>
        <h1 className="text-4xl font-bold text-[#2b2141]">Запись на демо</h1>
        <p className="max-w-2xl text-lg text-[#4b405a]">
          Оставьте заявку — скоро здесь появится форма для выбора даты и времени.
        </p>
      </Container>
    </Section>
  );
}
