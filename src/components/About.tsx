import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="max-w-[960px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-14">
          <div className="flex-1">
            <p className="eyebrow mb-3">{`// whoami`}</p>
            <h1 className="section-heading text-[34px] sm:text-[44px] leading-[1.08] mb-4">
              {profile.name}
              <span className="block text-[var(--color-ink-soft)] text-[20px] sm:text-[24px] font-normal mt-2">
                {profile.role} · {profile.location}
              </span>
            </h1>
            <p className="text-[var(--color-ink-soft)] text-[16px] sm:text-[17px] leading-relaxed max-w-[52ch]">
              {profile.intro}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-bg)] text-sm font-medium px-4 py-2.5 rounded hover:bg-[var(--color-accent)] transition-colors"
              >
                Download résumé
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded border border-[var(--color-border)] hover:border-[var(--color-ink)] transition-colors"
              >
                See projects
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div className="w-[140px] h-[140px] sm:w-[168px] sm:h-[168px] rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
              {/* TODO: replace /public/headshot.svg with a real professional headshot (jpg/png) and update profile.photo in src/data/content.ts */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
