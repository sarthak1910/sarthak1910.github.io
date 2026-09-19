/**
 * Abstract schematics of each system's shape. Deliberately not screenshots —
 * no proprietary UI, data or branding is reproduced anywhere on this site.
 */

function MobileVisual() {
  return (
    <svg viewBox="0 0 240 150" role="img" aria-label="Offline-first mobile architecture diagram">
      <rect className="pv-fill" x="14" y="18" width="62" height="114" rx="10" />
      <rect className="pv-stroke" x="14" y="18" width="62" height="114" rx="10" />
      <rect className="pv-accent-fill" x="24" y="32" width="42" height="8" rx="4" />
      <rect className="pv-soft" x="24" y="48" width="42" height="18" rx="4" />
      <rect className="pv-soft" x="24" y="72" width="42" height="18" rx="4" />
      <rect className="pv-soft" x="24" y="96" width="26" height="8" rx="4" />

      <rect className="pv-fill" x="104" y="28" width="58" height="34" rx="8" />
      <rect className="pv-stroke" x="104" y="28" width="58" height="34" rx="8" />
      <text className="pv-text" x="133" y="49">SmartStore</text>

      <rect className="pv-fill" x="104" y="88" width="58" height="34" rx="8" />
      <rect className="pv-stroke" x="104" y="88" width="58" height="34" rx="8" />
      <text className="pv-text" x="133" y="109">Sync</text>

      <rect className="pv-fill" x="182" y="58" width="48" height="34" rx="8" />
      <rect className="pv-stroke" x="182" y="58" width="48" height="34" rx="8" />
      <text className="pv-text" x="206" y="79">Apex</text>

      <g className="pv-line">
        <path d="M76 52h28" />
        <path d="M76 100h28" />
        <path d="M162 45h10a6 6 0 0 1 6 6v7" />
        <path d="M162 105h10a6 6 0 0 0 6-6v-7" />
      </g>
      <g className="pv-dash">
        <path d="M133 62v26" />
      </g>
    </svg>
  );
}

function StackVisual() {
  return (
    <svg viewBox="0 0 240 150" role="img" aria-label="React to Spring Boot to database stack diagram">
      <rect className="pv-fill" x="46" y="14" width="148" height="30" rx="8" />
      <rect className="pv-stroke" x="46" y="14" width="148" height="30" rx="8" />
      <text className="pv-text" x="120" y="33">React · UI</text>

      <rect className="pv-fill" x="46" y="60" width="148" height="30" rx="8" />
      <rect className="pv-accent-stroke" x="46" y="60" width="148" height="30" rx="8" />
      <text className="pv-text-accent" x="120" y="79">Spring Boot · REST API</text>

      <rect className="pv-fill" x="46" y="106" width="148" height="30" rx="8" />
      <rect className="pv-stroke" x="46" y="106" width="148" height="30" rx="8" />
      <text className="pv-text" x="120" y="125">Spring Data JPA · MySQL</text>

      <g className="pv-line">
        <path d="M120 44v16" />
        <path d="M120 90v16" />
      </g>
      <g className="pv-dash">
        <path d="M32 18v114" />
      </g>
      <text className="pv-text-mini" x="18" y="79" transform="rotate(-90 18 79)">
        Docker
      </text>
    </svg>
  );
}

function FlowVisual() {
  return (
    <svg viewBox="0 0 240 150" role="img" aria-label="CRM business workflow diagram">
      {[
        { x: 12, label: 'Rules' },
        { x: 70, label: 'Workflow' },
        { x: 128, label: 'API' },
        { x: 186, label: 'CRM' },
      ].map((node, i) => (
        <g key={node.label}>
          <rect className="pv-fill" x={node.x} y="52" width="42" height="42" rx="9" />
          <rect
            className={i === 1 ? 'pv-accent-stroke' : 'pv-stroke'}
            x={node.x}
            y="52"
            width="42"
            height="42"
            rx="9"
          />
          <text className="pv-text-mini" x={node.x + 21} y="77">
            {node.label}
          </text>
        </g>
      ))}
      <g className="pv-line">
        <path d="M54 73h16" />
        <path d="M112 73h16" />
        <path d="M170 73h16" />
      </g>
      <g className="pv-dash">
        <path d="M33 52V28h174v24" />
      </g>
      <text className="pv-text-mini" x="120" y="22">
        sync
      </text>
    </svg>
  );
}

const visuals = { mobile: MobileVisual, stack: StackVisual, flow: FlowVisual };

export function ProjectVisual({ type }) {
  const Visual = visuals[type];
  return Visual ? (
    <div className="project-visual">
      <Visual />
    </div>
  ) : null;
}
