import { Reveal } from './Reveal';

export function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <Reveal className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}
