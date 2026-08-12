import Section from "@/components/Section";
import { projects } from "@/data/content";
import { GithubIcon, ExternalLinkIcon } from "@/components/icons";

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            {project.image && (
              <div className="project-card__image-wrap">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-card__image"
                />
              </div>
            )}
            <div className="project-card__header">
              <h3 className="project-card__title">{project.name}</h3>
              <span
                className={`project-card__status project-card__status--${
                  project.status === "Complete" ? "complete" : "wip"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-card__links">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                >
                  <GithubIcon className="project-card__link-icon" />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                >
                  <ExternalLinkIcon className="project-card__link-icon" />
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="projects__more">More projects coming soon.</p>
    </Section>
  );
}
