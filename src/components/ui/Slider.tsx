import type { HTMLAttributes, ReactNode } from "react";

type SliderProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Slider({
  children,
  className = "",
  ...rest
}: SliderProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`} {...rest}>
      {children}
    </div>
  );
}
