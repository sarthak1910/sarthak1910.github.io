const paths = {
  linkedin: (
    <>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0z" />
      <path d="M0 8h5v13H0zM8 8h4.8v1.8h.07c.67-1.2 2.3-2.46 4.73-2.46C22.4 7.34 24 10.1 24 14.2V21h-5v-6c0-1.9-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V21H8z" />
    </>
  ),
  github: (
    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.24a11.4 11.4 0 0 1 6 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.65.25 2.88.12 3.18.77.84 1.23 1.92 1.23 3.24 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .5z" />
  ),
  code: (
    <>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
    </>
  ),
  terminal: (
    <>
      <path d="m4 7 5 5-5 5" />
      <path d="M12 17h8" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2.5 6.5 8.4 5.9a2 2 0 0 0 2.2 0l8.4-5.9" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M4 20h16" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 20V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 10 14" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </>
  ),
  menu: (
    <>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </>
  ),
  close: (
    <>
      <path d="m5 5 14 14" />
      <path d="m19 5-14 14" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  mobile: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3.2" />
      <path d="M4 5.5v13c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-13" />
      <path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2" />
    </>
  ),
  tools: (
    <>
      <path d="M14.5 5.5a4 4 0 0 0 5.2 5.2L21 12l-9 9-3-3 9-9z" />
      <path d="m7.5 10.5-4-4a2.5 2.5 0 0 1 3.5-3.5l4 4" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9.5 2.5v3.5M14.5 2.5v3.5M9.5 18v3.5M14.5 18v3.5M2.5 9.5H6M2.5 14.5H6M18 9.5h3.5M18 14.5h3.5" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v4" />
    </>
  ),
  cricket: (
    <>
      <path d="M3 21 8 16" />
      <rect
        x="7.5"
        y="4.5"
        width="5"
        height="12"
        rx="2.2"
        transform="rotate(45 10 10.5)"
      />
      <circle cx="18.5" cy="5.5" r="3" />
    </>
  ),
  spark: (
    <path d="M12 2.5 14.4 9 21 11.4 14.4 13.8 12 20.5 9.6 13.8 3 11.4 9.6 9z" />
  ),
  check: <path d="m4 12.5 5 5 11-11" />,
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

/** Filled icons need no stroke; the rest share one stroke style. */
const FILLED = new Set(['linkedin', 'github', 'spark']);

export function Icon({ name, size = 18, className = '', ...rest }) {
  const path = paths[name];
  if (!path) return null;

  const filled = FILLED.has(name);

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={filled ? 0 : 1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {path}
    </svg>
  );
}
