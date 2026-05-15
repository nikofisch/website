import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ProjectRowProps = {
  name: string;
  description: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  tools: string[];
};

export function ProjectRow({
  name,
  description,
  href = "#",
  imageSrc,
  imageAlt,
  tools,
}: ProjectRowProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 overflow-hidden rounded-[1.4rem] border border-[var(--card-border)] bg-[var(--card)] p-2.5 hover:bg-[var(--card-hover)] sm:p-3"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-[1rem] border border-[var(--card-border)] bg-[var(--card-hover)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, 900px"
        />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
            {name}
          </h3>
          <p className="mt-1.5 text-sm leading-6 text-[var(--text-soft)] sm:text-[0.92rem]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-[var(--card-border)] bg-transparent px-2.5 py-1 font-mono text-[0.68rem] capitalize tracking-[0.14em] text-[var(--text-soft)]"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-auto flex justify-end">
        <ArrowUpRight className="h-4 w-4 text-[var(--icon)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--text-muted)]" />
      </div>
    </a>
  );
}
