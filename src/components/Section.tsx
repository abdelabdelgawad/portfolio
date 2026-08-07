import { ReactNode } from "react";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string; // e.g. "01"
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20 border-t border-[var(--color-border)]">
      <div className="max-w-[960px] mx-auto px-5 sm:px-8">
        <div className="flex items-baseline gap-3 mb-8">
          <span className="eyebrow">{`// ${index}`}</span>
          <h2 className="section-heading text-2xl sm:text-[28px]">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
