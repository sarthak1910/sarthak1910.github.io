import { profile, socials } from '../data/profile';
import { ExternalLink } from './ExternalLink';
import { Icon } from './Icon';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-name">{profile.name}</p>
          <p className="footer-tagline">
            {profile.role} · {profile.tagline}
          </p>
        </div>

        <ul className="footer-socials">
          {socials.map((social) => (
            <li key={social.label}>
              <ExternalLink
                href={social.href}
                className="footer-social"
                label={`${social.label} — ${social.handle}`}
              >
                <Icon name={social.icon} size={17} />
              </ExternalLink>
            </li>
          ))}
        </ul>

        <div className="footer-meta">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href="#top" className="footer-top">
            Back to top
            <Icon name="arrowUp" size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
