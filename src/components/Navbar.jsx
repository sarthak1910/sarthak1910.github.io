import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { Icon } from './Icon';

const SECTION_IDS = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(SECTION_IDS);

  // Lock scrolling and allow Escape to dismiss while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <nav className="nav-inner" aria-label="Primary">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-mark" aria-hidden="true">
            SV
          </span>
          <span className="nav-name">{profile.name}</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? 'is-active' : ''}
                aria-current={active === link.href.slice(1) ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a className="btn btn-ghost btn-sm nav-resume" href={profile.resume} download>
            <Icon name="download" size={15} />
            Resume
          </a>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </nav>

      {/* `inert` (not `hidden`) so the collapse can animate while the links stay
          out of the tab order and the accessibility tree when closed. */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        inert={!open}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
                <Icon name="arrowRight" size={16} />
              </a>
            </li>
          ))}
        </ul>
        <a
          className="btn btn-primary"
          href={profile.resume}
          download
          onClick={() => setOpen(false)}
        >
          <Icon name="download" size={16} />
          Download Resume
        </a>
      </div>
    </header>
  );
}
