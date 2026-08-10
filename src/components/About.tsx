import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__layout">
          <div className="about__intro">
            <p className="eyebrow about__eyebrow">{`// whoami`}</p>
            <h1 className="section-heading about__name">
              {profile.name}
              <span className="about__role">
                {profile.role} · {profile.location}
              </span>
            </h1>
            <p className="about__description">{profile.intro}</p>

            <div className="about__actions">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="about__button about__button--primary"
              >
                View Resume
              </a>
              <a href="#projects" className="about__button about__button--primary">
                See Projects
              </a>
            </div>
          </div>

          <div className="about__photo-wrap">
            <div className="about__photo-frame">
              {/* TODO: replace /public/headshot.svg with a real professional headshot (jpg/png) and update profile.photo in src/data/content.ts */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.photo} alt={profile.name} className="about__photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
