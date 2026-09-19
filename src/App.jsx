import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { About } from './sections/About';
import { BeyondCode } from './sections/BeyondCode';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Hero } from './sections/Hero';
import { Highlights } from './sections/Highlights';
import { Projects } from './sections/Projects';
import { Recommendations } from './sections/Recommendations';
import { Skills } from './sections/Skills';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Highlights />
        <Recommendations />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
