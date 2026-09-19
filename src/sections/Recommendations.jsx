import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { recommendations } from '../data/recommendations';

export function Recommendations() {
  return (
    <section className="section" id="recommendations" aria-labelledby="recommendations-title">
      <div className="container">
        <SectionHeading
          id="recommendations-title"
          eyebrow="Recommendations"
          title="What people I've worked with say"
          description="Written on LinkedIn by colleagues at DealerMatix Technologies, quoted as published."
        />

        <div className="recommendations-grid">
          {recommendations.map((item, index) => (
            <Reveal
              as="figure"
              key={item.name}
              className="recommendation-card"
              delay={index * 90}
            >
              <blockquote>
                {item.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </blockquote>

              <figcaption className="recommendation-author">
                <span className="recommendation-avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <span className="recommendation-meta">
                  <strong>{item.name}</strong>
                  <em>{item.headline}</em>
                  <span className="recommendation-relation">
                    {item.relationship} · {item.date}
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
