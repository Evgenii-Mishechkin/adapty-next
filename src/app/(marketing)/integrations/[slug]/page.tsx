import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

type IntegrationPageProps = {
  params: { slug: string };
};

export function generateMetadata({
  params,
}: IntegrationPageProps): Metadata {
  const title = formatSlug(params.slug);
  return {
    title: `${title} | Интеграция | Adapty`,
  };
}

export default function IntegrationDetailPage({ params }: IntegrationPageProps) {
  const title = formatSlug(params.slug);

  return (
    <Section>
      <Container className="space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#7b4ffe] ring-1 ring-[#e7ddf7]">
          Интеграции
        </p>
        <h1 className="text-4xl font-bold text-[#2b2141]">{title}</h1>
        <p className="max-w-2xl text-lg text-[#4b405a]">
          Страница интеграции в разработке. Добавим описание и инструкции по
          подключению.
        </p>
      </Container>
    </Section>
  );
}

function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
