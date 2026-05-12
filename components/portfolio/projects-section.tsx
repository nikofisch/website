import { ProjectRow } from "@/components/portfolio/project-row";

type Project = {
  name: string;
  description: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  tools: string[];
};

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="mt-6 border-t border-[var(--card-border)] px-5 pt-4 pb-8 sm:px-8"
    >
      <div className="mb-3 flex items-end justify-between gap-3">
        <p className="font-mono text-[1.05rem] uppercase tracking-[0.24em] text-[var(--text-soft)] sm:text-[1.1rem]">
          Projects
        </p>
      </div>
      <div className="grid gap-2.5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectRow key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
