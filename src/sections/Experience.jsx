import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I've worked"
          description="Production software, shipped and supported — not coursework."
        />

        <ol className="timeline">
          {experience.map((item, index) => (
            <Reveal as="li" key={item.company} className="timeline-item" delay={index * 90}>
              <span className={`timeline-dot ${item.current ? 'is-current' : ''}`} aria-hidden="true" />

              <div className="timeline-card">
                <header className="timeline-head">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="timeline-company">
                      {item.company}
                      {item.current && <span className="tag-live">Current</span>}
                    </p>
                  </div>
                  <div className="timeline-meta">
                    <p className="timeline-period">{item.period}</p>
                    <p className="timeline-location">{item.location}</p>
                  </div>
                </header>

                <p className="timeline-summary">{item.summary}</p>

                <ul className="timeline-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <ul className="stack-list">
                  {item.stack.map((tech) => (
                    <li key={tech} className="chip chip-plain">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
