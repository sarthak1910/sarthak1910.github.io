import { Reveal } from './Reveal';

export function MetricCard({ value, label, detail, delay }) {
  return (
    <Reveal className="metric-card" delay={delay}>
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
      <p className="metric-detail">{detail}</p>
    </Reveal>
  );
}
