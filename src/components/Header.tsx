"use client";

import { useState } from "react";
import { nav, profile, socials } from "@/data/content";
import { iconMap } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur">
      <div className="max-w-[960px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] font-semibold tracking-tight text-[15px]"
        >
          {profile.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] transition-colors"
            >
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-[var(--color-muted)] mr-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social icons — corner, always visible */}
        <div className="hidden md:flex items-center gap-4">
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
                <Icon className="w-[18px] h-[18px]" />
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-sm font-[family-name:var(--font-mono)]"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4">
          <nav className="flex flex-col gap-3 mb-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--color-ink-soft)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5 pt-3 border-t border-[var(--color-border)]">
            {socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
