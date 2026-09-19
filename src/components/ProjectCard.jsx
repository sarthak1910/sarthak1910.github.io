import { ExternalLink } from './ExternalLink';
import { Icon } from './Icon';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from './Reveal';

export function ProjectCard({ project, delay }) {
  const {
    title,
    subtitle,
    kind,
    year,
    description,
    problem,
    built,
    challenge,
    impact,
    stack,
    visual,
    note,
    links,
  } = project;

  return (
    <Reveal as="article" className="project-card" delay={delay}>
      <div className="project-media">
        <span className="project-kind">{kind}</span>
        <ProjectVisual type={visual} />
      </div>

      <div className="project-body">
        <header className="project-head">
          <div>
            <h3>{title}</h3>
            <p className="project-subtitle">{subtitle}</p>
          </div>
          <span className="project-year">{year}</span>
        </header>

        <p className="project-description">{description}</p>

        <dl className="project-detail">
          <div>
            <dt>The problem</dt>
            <dd>{problem}</dd>
          </div>
          <div>
            <dt>What I built</dt>
            <dd>
              <ul className="bullets">
                {built.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} className="bullet-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt>Key engineering challenge</dt>
            <dd>{challenge}</dd>
          </div>
        </dl>

        <ul className="impact-list">
          {impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ul className="stack-list" aria-label={`${title} technology stack`}>
          {stack.map((tech) => (
            <li key={tech} className="chip chip-plain">
              {tech}
            </li>
          ))}
        </ul>

        {(note || links.length > 0) && (
          <footer className="project-footer">
            {note && <p className="project-note">{note}</p>}
            {links.length > 0 && (
              <div className="project-links">
                {links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    href={link.href}
                    className="btn btn-ghost btn-sm"
                    label={`${link.label} — ${title}`}
                  >
                    <Icon name={link.icon || 'external'} size={15} />
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            )}
          </footer>
        )}
      </div>
    </Reveal>
  );
}
