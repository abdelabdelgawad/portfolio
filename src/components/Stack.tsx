import Section from "@/components/Section";
import { stack } from "@/data/content";

export default function Stack() {
  return (
    <Section id="stack" index="02" title="Stack">
      <div className="stack__grid">
        {stack.map((group) => (
          <div key={group.category}>
            <p className="stack__category">{group.category}</p>
            <ul className="stack__items">
              {group.items.map((item) => (
                <li key={item} className="stack__item">
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
