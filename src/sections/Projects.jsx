import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          eyebrow="Featured Projects"
          title="Things I've built"
          description="Work I can talk through in detail — the constraints, the trade-offs and what actually shipped."
        />

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
