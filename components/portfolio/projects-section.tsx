import { ProjectRow } from "@/components/portfolio/project-row";

type Project = {
  name: string;
  description: string;
  tag: string;
  href?: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="mt-10 border-t border-[var(--card-border)] px-5 pt-10 pb-10 sm:px-8"
    >
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--text-soft)]">
            projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-3xl">
            consectetur adipiscing elit
          </h2>
        </div>
      </div>
      <div className="space-y-3">
        {projects.map((project) => (
          <ProjectRow key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
