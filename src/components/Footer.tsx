import { profile, socials } from "@/data/content";
import { iconMap } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <div>
          <p className="eyebrow site-footer__eyebrow">{`// get in touch`}</p>
          <h2 className="section-heading site-footer__heading">Let&apos;s talk.</h2>
          <p>
            <a href={`mailto:${profile.email}`} className="site-footer__email">
              {profile.email}
            </a>
            <br />
            <a href={`tel:${profile.phoneNumber}`} className="site-footer__phone">
              {profile.phoneNumber}
            </a>
          </p>
        </div>
        <div className="site-footer__socials">
          {socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="site-footer__social-link"
              >
                <Icon className="site-footer__social-icon" />
              </a>
            );
          })}
        </div>
      </div>
      <p className="container site-footer__copyright">
        © {new Date().getFullYear()} {profile.name}.
      </p>
    </footer>
  );
}
