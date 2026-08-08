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
    <section id={id} className="section">
      <div className="container">
        <div className="section__header">
          <span className="eyebrow">{`// ${index}`}</span>
          <h2 className="section-heading section__title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
