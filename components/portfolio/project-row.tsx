import { ArrowUpRight } from "lucide-react";

type ProjectRowProps = {
  name: string;
  description: string;
  tag: string;
  href?: string;
};

export function ProjectRow({
  name,
  description,
  tag,
  href = "#",
}: ProjectRowProps) {
  return (
    <a
      href={href}
      className="group grid gap-3 rounded-[1.5rem] border border-[var(--card-border)] bg-[var(--card)] px-4 py-4 hover:bg-[var(--card-hover)] sm:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_auto_auto] sm:items-center sm:gap-5"
    >
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
        {name}
      </h3>
      <p className="text-sm leading-7 text-[var(--text-soft)] sm:text-[0.95rem]">
        {description}
      </p>
      <span className="w-fit rounded-full bg-[var(--tag-bg)] px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--tag-fg)]">
        {tag}
      </span>
      <ArrowUpRight className="h-4 w-4 text-[var(--icon)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text-muted)]" />
    </a>
  );
}
