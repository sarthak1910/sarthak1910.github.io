import { ContactForm } from '../components/ContactForm';
import { ExternalLink } from '../components/ExternalLink';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { contactForm, profile, socials } from '../data/profile';

const CONTACT_LINKS = ['LinkedIn', 'GitHub'];

export function Contact() {
  const contactSocials = socials.filter((social) => CONTACT_LINKS.includes(social.label));
  // See the `contactForm` notes in src/data/profile.js — no key, no form.
  const hasForm = Boolean(contactForm.accessKey);

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className={`contact-panel ${hasForm ? 'has-form' : ''}`}>
          <div className="contact-intro">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">
              Have a project, opportunity, or engineering problem to discuss?
            </h2>
            <p className="contact-lead">
              I'm always open to talking about mobile and full-stack work, interesting
              business problems, or a role where I can own real features end to end.
            </p>

            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <Icon name="mail" size={17} />
                {profile.email}
              </a>
              <a className="btn btn-secondary" href={profile.resume} download>
                <Icon name="download" size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {hasForm && <ContactForm />}

          {/* Spans the full panel width so the two columns above stay balanced. */}
          <ul className="contact-links">
            {contactSocials.map((social) => (
              <li key={social.label}>
                <ExternalLink
                  href={social.href}
                  className="contact-link"
                  label={`${social.label} — ${social.handle}`}
                >
                  <Icon name={social.icon} size={18} />
                  <span>
                    <strong>{social.label}</strong>
                    <em>{social.handle}</em>
                  </span>
                  <Icon name="external" size={15} className="contact-link-arrow" />
                </ExternalLink>
              </li>
            ))}
            <li>
              <p className="contact-link is-static">
                <Icon name="pin" size={18} />
                <span>
                  <strong>Based in</strong>
                  <em>{profile.location}</em>
                </span>
              </p>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
