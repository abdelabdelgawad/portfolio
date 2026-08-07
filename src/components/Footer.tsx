import { profile, socials } from "@/data/content";
import { iconMap } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-14">
      <div className="max-w-[960px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          <p className="eyebrow mb-2">{`// get in touch`}</p>
          <h2 className="section-heading text-2xl sm:text-[28px] mb-3">
            Let&apos;s talk.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="text-[var(--color-accent)] text-sm hover:underline"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex items-center gap-5">
          {socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
      <p className="max-w-[960px] mx-auto px-5 sm:px-8 mt-10 text-[12px] text-[var(--color-muted)] font-[family-name:var(--font-mono)]">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
      </p>
    </footer>
  );
}
