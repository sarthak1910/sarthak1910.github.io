import { MetricCard } from '../components/MetricCard';
import { SectionHeading } from '../components/SectionHeading';
import { highlights } from '../data/highlights';

export function Highlights() {
  return (
    <section className="section section-tight" id="highlights" aria-labelledby="highlights-title">
      <div className="container">
        <SectionHeading
          id="highlights-title"
          eyebrow="Engineering Highlights"
          title="Measured, not claimed"
        />

        <div className="metrics-grid">
          {highlights.map((item, index) => (
            <MetricCard key={item.label} {...item} delay={index * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
