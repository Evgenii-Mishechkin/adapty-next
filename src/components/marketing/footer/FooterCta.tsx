import { Button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function FooterCta() {
  return (
    <Container className="flex flex-col gap-4 py-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold leading-snug text-white">
          Начните сегодня или
          <br />
          запланируйте демонстрацию
          <br />
          для вашего личного онбординга
        </h2>
      </div>
      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
        <Button
          variant="secondary"
          className="border-[#4d435f] bg-transparent text-white hover:border-[#7a6ca0]"
        >
          НАЧАТЬ БЕСПЛАТНО
        </Button>
        <Button className="bg-[#6a3bff] px-6 text-white hover:brightness-110">
          ЗАПИСАТЬСЯ НА ДЕМОНСТРАЦИЮ
        </Button>
      </div>
    </Container>
  );
}
