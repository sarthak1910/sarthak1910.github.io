import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function SkillCategory({ group, delay }) {
  return (
    <Reveal className="skill-card" delay={delay}>
      <div className="skill-card-head">
        <span className="skill-icon" aria-hidden="true">
          <Icon name={group.icon} size={16} />
        </span>
        <h3>{group.title}</h3>
      </div>
      <ul className="skill-list">
        {group.skills.map((skill) => (
          <li key={skill.name} className={`chip chip-${skill.level}`}>
            {skill.name}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
