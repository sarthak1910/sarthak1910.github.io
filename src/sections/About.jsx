import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { about } from '../data/profile';

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about-title" eyebrow="About" title="Mobile first, then the whole stack" />

        <div className="about-grid">
          <Reveal className="about-text" delay={60}>
            {about.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}

            <h3 className="about-subtitle">What I enjoy building</h3>
            <ul className="enjoy-list">
              {about.enjoys.map((item) => (
                <li key={item}>
                  <Icon name="spark" size={13} className="enjoy-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about-facts" delay={140}>
            <dl>
              {about.quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
