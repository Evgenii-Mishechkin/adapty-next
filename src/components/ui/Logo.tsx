import type { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md";
};

const sizeMap = {
  sm: "text-lg",
  md: "text-xl",
};

export default function Logo({ className = "", size = "md", ...rest }: LogoProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 font-extrabold tracking-tight text-[#5b4df9] ${sizeMap[size]} ${className}`}
      {...rest}
    >
      <span className="grid h-8 w-8 place-items-center rounded-2xl bg-gradient-to-br from-[#5b4df9] via-[#7b4ffe] to-[#c64dff] text-white shadow-lg shadow-[#5b4df9]/30">
        A
      </span>
      <span className="text-[#201a2f]">Adapty</span>
    </div>
  );
}
