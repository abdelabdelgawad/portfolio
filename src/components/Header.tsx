"use client";

import { useState } from "react";
import { nav, profile, socials } from "@/data/content";
import { iconMap } from "@/components/icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__row">
        <a href="#top" className="site-header__logo">
          {profile.name}
        </a>

        {/* Desktop nav */}
        <nav className="site-header__nav">
          {nav.map((item, i) => (
            <a key={item.href} href={item.href} className="site-header__nav-link">
              <span className="site-header__nav-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Social icons — corner, always visible */}
        <div className="site-header__socials">
          {socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="site-header__social-link"
              >
                <Icon className="site-header__social-icon" />
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="site-header__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="site-header__mobile-panel">
          <nav className="site-header__mobile-nav">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="site-header__mobile-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="site-header__mobile-socials">
            {socials.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <Icon className="site-header__social-icon" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
