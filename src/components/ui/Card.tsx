import type { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Card({
  children,
  className = "",
  ...rest
}: CardProps) {
  return (
    <div
      className={`rounded-3xl bg-white p-6 shadow-[0_25px_70px_-30px_rgba(22,14,45,0.3)] ring-1 ring-black/5 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
