/** Every outbound link gets the same safety attributes and screen-reader hint. */
export function ExternalLink({ href, children, className = '', label, ...rest }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      {...rest}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
