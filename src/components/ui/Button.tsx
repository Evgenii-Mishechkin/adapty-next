import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#5b4df9] via-[#7a4ffe] to-[#c64dff] text-white shadow-lg shadow-[#5b4df9]/30 hover:brightness-105",
  secondary:
    "border border-[#d7d1e3] bg-white text-[#2b2141] hover:border-[#bcaed9] hover:shadow-sm",
  ghost: "text-[#5b4df9] hover:text-[#4a3ac8]",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  href,
  ...rest
}: ButtonProps) {
  const Component = href ? "a" : "button";
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold no-underline transition duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7a4ffe]";

  return (
    <Component
      className={`${base} ${variantStyles[variant]} ${className}`}
      {...(!href && { type: (rest as ButtonHTMLAttributes<HTMLButtonElement>).type ?? "button" })}
      {...rest}
    >
      {children}
    </Component>
  );
}
