import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/marketing/header/Header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adapty | Платформа для роста мобильных приложений",
  description:
    "Платформа для подписок: paywall-эксперименты, аналитика и управление в одном месте.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} bg-[#f7f4f2] text-[#1f1632] antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

