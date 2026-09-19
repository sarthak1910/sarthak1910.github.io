import { ExternalLink } from '../components/ExternalLink';
import { Icon } from '../components/Icon';
import { profile, socials } from '../data/profile';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-badge">
            <span className="status-dot" aria-hidden="true" />
            {profile.currentRole.title} @ {profile.currentRole.company}
          </p>

          <h1 className="hero-title">{profile.name}</h1>

          <p className="hero-role">{profile.role}</p>
          <p className="hero-stack">{profile.tagline}</p>

          <p className="hero-statement">{profile.statement}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Work
              <Icon name="arrowRight" size={17} />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
            <a className="btn btn-ghost" href={profile.resume} download>
              <Icon name="download" size={16} />
              Resume
            </a>
          </div>

          <ul className="hero-socials">
            {socials.map((social) => (
              <li key={social.label}>
                <ExternalLink
                  href={social.href}
                  className="social-link"
                  label={`${social.label} — ${social.handle}`}
                >
                  <Icon name={social.icon} size={17} />
                  <span>{social.label}</span>
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero-card" aria-label="Profile summary">
          <div className="hero-card-bar">
            <span /> <span /> <span />
            <p>engineer.profile</p>
          </div>
          <dl className="hero-card-body">
            <div>
              <dt>Role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{profile.experienceYears} years</dd>
            </div>
            <div>
              <dt>Company</dt>
              <dd>{profile.currentRole.company}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Building</dt>
              <dd>Mobile apps · Full-stack systems · CRM workflows</dd>
            </div>
          </dl>
          <div className="hero-card-foot">
            {['React Native', 'React', 'Java', 'Spring Boot'].map((tech) => (
              <span key={tech} className="chip chip-core">
                {tech}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
