# Portfolio — Sarthak Verma

Personal portfolio site. Software Engineer working across React Native, React, Java and Spring Boot.

Built with React + Vite and plain CSS — no UI framework, no animation library.

## Running it

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
npm run lint
```

## Structure

```
public/            resume PDF, favicon, Open Graph image
src/
  data/            all content (profile, experience, projects, skills, highlights)
  components/      reusable UI (Navbar, ProjectCard, SkillCategory, MetricCard, …)
  sections/        page sections in the order they render
  hooks/           useReveal, useActiveSection, useScrolled
  styles/app.css   layout + component styles
  index.css        design tokens, base styles, accessibility
  App.jsx          section composition
```

## Editing content

Everything readable on the page lives in `src/data/` — no need to touch components.

- **Profile, links, email, resume path** → `src/data/profile.js`
- **Experience timeline** → `src/data/experience.js`
- **Projects** → `src/data/projects.js`
- **Skills and hobbies** → `src/data/skills.js`
- **LinkedIn recommendations** → `src/data/recommendations.js`
- **Metrics** → `src/data/highlights.js`

Project buttons (Live Demo / GitHub) render only when a real URL exists. Add one to a
project's `links` array and the button appears:

```js
links: [{ label: 'GitHub', href: 'https://github.com/...', icon: 'github' }]
```

Skills are tagged `core` (day-to-day) or `working` (real hands-on exposure) and are
styled differently — keep that honest.

Recommendations are quoted verbatim from LinkedIn. Only add entries that were
actually written by a real person; never invent or reword them.

## Contact form

The contact section shows a message form only when `contactForm.accessKey` is set in
`src/data/profile.js`. Until then the section renders with the email, resume and social
links alone — no half-working form on a live site.

To switch it on:

1. Go to [web3forms.com](https://web3forms.com), enter the inbox that should receive
   messages, and they email you an access key. No account needed.
2. Paste the key into `contactForm.accessKey` and redeploy.

Submissions then arrive in that inbox with the subject
`Portfolio enquiry from <name>`. The form collects name and email (required), company,
phone and message, and carries a honeypot field to drop bots. The access key is safe to
commit — it only permits sending to the address you verified.

To use a different provider, change `contactForm.endpoint` and adjust the request body
in `src/components/ContactForm.jsx`.

## Replacing the resume

Drop the new PDF at `public/Sarthak_Verma_Resume.pdf`, or change `profile.resume`
in `src/data/profile.js` to match a new filename.

## Before deploying

`index.html` and `src/data/profile.js` use `https://sarthakverma.dev/` as the canonical
URL. Update the `canonical`, `og:url` and `og:image` values to the real domain once it
is live, otherwise link previews will point at the wrong host.

Static build — deploy `dist/` to Vercel, Netlify, GitHub Pages or any static host.

## Notes

- Dark theme only, with design tokens in `src/index.css`.
- Scroll animations use `IntersectionObserver` and are disabled under
  `prefers-reduced-motion: reduce`.
- No proprietary source, screenshots or customer data from work projects appear here —
  the project diagrams are abstract schematics.
