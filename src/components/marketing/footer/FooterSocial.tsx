import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://twitter.com" },
  { label: "Discord", href: "https://discord.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function FooterSocial() {
  return (
    <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Logo className="text-white" />
      <div className="flex flex-wrap items-center gap-4 text-sm text-[#c8c2d5]">
        {social.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-full border border-[#1f1a2d] px-3 py-2 transition hover:border-[#2f2642] hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </Container>
  );
}
