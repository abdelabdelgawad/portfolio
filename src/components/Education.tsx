import Section from "@/components/Section";
import { education } from "@/data/content";

export default function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8"
          >
            <p className="font-[family-name:var(--font-mono)] text-[12px] text-[var(--color-muted)] pt-1">
              {edu.start} — {edu.end}
            </p>
            <div>
              <h3 className="font-medium text-[15px]">{edu.school}</h3>
              <p className="text-sm text-[var(--color-ink-soft)] mb-1">{edu.degree}</p>
              <p className="text-[13px] text-[var(--color-muted)] mb-2">{edu.location}</p>
              {edu.details.length > 0 && (
                <ul className="list-disc list-outside pl-4 space-y-1">
                  {edu.details.map((d, i) => (
                    <li key={i} className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
