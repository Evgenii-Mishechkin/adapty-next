import Link from "next/link";
import { ArrowRight } from "./icons";

interface ActionButtonsProps {
  layout?: "inline" | "grid";
  className?: string;
}

export default function ActionButtons({ layout = "grid", className = "" }: ActionButtonsProps) {
  const containerClass = layout === "grid" ? `grid grid-cols-2 gap-3 ${className}` : `flex items-center gap-3 ${className}`;

  return (
    <div className={containerClass}>
      <Link
        href="https://app.adapty.io/registration"
        className="inline-flex items-center gap-2 rounded-xl border border-[#6a3bff] bg-white px-4 py-2 text-sm font-semibold text-[#6a3bff] shadow-sm transition-colors duration-300 ease-out hover:bg-[#6a3bff]/5"
        target="_blank"
        rel="noreferrer"
      >
        Начать
        {layout === "inline" && <ArrowRight className="h-4 w-4" />}
      </Link>
      <Link
        href="/schedule-demo"
        className={`inline-flex items-center gap-2 rounded-xl bg-[#6a3bff] px-5 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(106,59,255,0.9)] transition duration-300 ease-out hover:brightness-110 ${
          layout === "grid" ? "justify-center" : ""
        }`}
      >
        Запись на демо
        {layout === "inline" && <ArrowRight className="h-4 w-4" />}
      </Link>
    </div>
  );
}