import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const stats = [
  { value: "$2 млрд.", label: "обрабатываемого дохода" },
  { value: "99.99%", label: "времени безотказной работы" },
  { value: "2.5 млрд.", label: "обслуживаемых пользователей" },
  { value: "60 млрд.", label: "обращений к API / месяц" },
];

export default function StatsSection() {
  return (
    <Section className="bg-[#f8f7fa] py-16 sm:py-20">
      <Container className="space-y-10 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold text-[#131017] sm:text-4xl">
            Adapty обрабатывает доход от подписок
          </h2>
          <p className="text-2xl font-semibold text-[#131017] sm:text-3xl">
            с самым высоким SLA уровнем в индустрии
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {stats.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-3xl font-extrabold text-[#16111e] sm:text-4xl">
                {item.value}
              </p>
              <p className="text-base text-[#4a4354]">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
