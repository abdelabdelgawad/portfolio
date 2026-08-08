import Section from "@/components/Section";
import { education } from "@/data/content";

export default function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <div className="timeline">
        {education.map((edu) => (
          <div key={edu.school} className="timeline__entry">
            <p className="timeline__date">
              {edu.start} — {edu.end}
            </p>
            <div>
              <h3 className="timeline__role">{edu.school}</h3>
              <p className="timeline__degree">{edu.degree}</p>
              <p className="timeline__location">{edu.location}</p>
              {edu.details.length > 0 && (
                <ul className="timeline__list">
                  {edu.details.map((d, i) => (
                    <li key={i} className="timeline__list-item">
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
