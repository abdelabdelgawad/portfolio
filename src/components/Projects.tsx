import Section from "@/components/Section";
import { projects } from "@/data/content";
import { GithubIcon, ExternalLinkIcon } from "@/components/icons";

export default function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="border border-[var(--color-border)] bg-[var(--color-surface)] rounded-lg p-5 flex flex-col"
          >
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg mb-2">
              {project.name}
            </h3>
            <p className="text-[var(--color-ink-soft)] text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-[family-name:var(--font-mono)] text-[11px] px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-ink-soft)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
