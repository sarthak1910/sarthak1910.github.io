import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { beyondCode } from '../data/skills';

export function BeyondCode() {
  return (
    <section className="section" id="beyond" aria-labelledby="beyond-title">
      <div className="container">
        <SectionHeading
          id="beyond-title"
          eyebrow="Beyond Code"
          title="When I'm not coding"
          description="Two things that keep the technical side of my head balanced."
        />

        <div className="beyond-grid">
          {beyondCode.map((item, index) => (
            <Reveal key={item.title} className="beyond-card" delay={index * 90}>
              <span className="beyond-icon" aria-hidden="true">
                <Icon name={item.icon} size={20} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
