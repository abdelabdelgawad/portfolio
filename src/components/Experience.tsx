import Section from "@/components/Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <div className="timeline">
        {experience.map((job) => (
          <div key={`${job.role}-${job.org}`} className="timeline__entry">
            <p className="timeline__date">
              {job.start} — {job.end}
            </p>
            <div>
              <h3 className="timeline__role">
                {job.role} <span className="timeline__org">· {job.org}</span>
              </h3>
              <p className="timeline__location">{job.location}</p>
              <ul className="timeline__list">
                {job.bullets.map((b, i) => (
                  <li key={i} className="timeline__list-item">
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
