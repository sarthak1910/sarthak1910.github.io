import { useReveal } from '../hooks/useReveal';

/** Wraps children in a scroll-triggered fade/rise. `delay` is in milliseconds. */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
