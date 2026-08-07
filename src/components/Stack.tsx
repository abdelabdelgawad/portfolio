import Section from "@/components/Section";
import { stack } from "@/data/content";

export default function Stack() {
  return (
    <Section id="stack" index="02" title="Stack">
      <div className="grid sm:grid-cols-3 gap-x-8 gap-y-8">
        {stack.map((group) => (
          <div key={group.category}>
            <p className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-wide text-[var(--color-muted)] mb-3">
              {group.category}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm px-2.5 py-1 rounded border border-[var(--color-border)] bg-[var(--color-surface)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
