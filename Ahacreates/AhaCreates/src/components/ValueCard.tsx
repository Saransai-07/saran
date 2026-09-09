import type { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-charcoal">{title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-warm-gray">
        {description}
      </p>
    </div>
  );
}
