import type { ReactNode } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollSection({
  children,
  className = "",
  delay = 0,
}: ScrollSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`animate-fade-up ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
