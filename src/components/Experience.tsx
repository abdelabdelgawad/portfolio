import Section from "@/components/Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <div className="flex flex-col gap-8">
        {experience.map((job) => (
          <div
            key={`${job.role}-${job.org}`}
            className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8"
          >
            <p className="font-[family-name:var(--font-mono)] text-[12px] text-[var(--color-muted)] pt-1">
              {job.start} — {job.end}
            </p>
            <div>
              <h3 className="font-medium text-[15px]">
                {job.role} <span className="text-[var(--color-ink-soft)]">· {job.org}</span>
              </h3>
              <p className="text-[13px] text-[var(--color-muted)] mb-2">{job.location}</p>
              <ul className="list-disc list-outside pl-4 space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
