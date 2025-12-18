import type { HTMLAttributes, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className = "",
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
