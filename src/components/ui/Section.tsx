import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
} & HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className = "",
  id,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}
