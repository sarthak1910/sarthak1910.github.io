import { SectionHeading } from '../components/SectionHeading';
import { SkillCategory } from '../components/SkillCategory';
import { skillGroups } from '../data/skills';

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          title="Technologies I work with"
          description="Split honestly: what I build with daily, and what I've genuinely used on real work."
        />

        <p className="legend">
          <span className="legend-item">
            <span className="chip chip-core legend-swatch">Core</span>
            day-to-day
          </span>
          <span className="legend-item">
            <span className="chip chip-working legend-swatch">Working</span>
            hands-on exposure
          </span>
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <SkillCategory key={group.title} group={group} delay={index * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
