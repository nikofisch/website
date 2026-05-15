"use client";

import { BriefcaseBusiness, Cpu, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";

type SectionLink = {
  href: string;
  label: string;
};

type SectionNavProps = {
  links: SectionLink[];
};

function getIcon(label: string) {
  switch (label) {
    case "Work Experience":
      return BriefcaseBusiness;
    case "Technologies":
      return Cpu;
    case "Projects":
      return FolderOpen;
    default:
      return FolderOpen;
  }
}

export function SectionNav({ links }: SectionNavProps) {
  const [activeHref, setActiveHref] = useState<string>(links[0]?.href ?? "");

  useEffect(() => {
    const headings = links
      .map(({ href }) => {
        const sectionName = href.slice(1);
        return document.querySelector<HTMLElement>(
          `[data-section-heading="${sectionName}"]`,
        );
      })
      .filter((heading): heading is HTMLElement => heading !== null);

    if (headings.length === 0) {
      return;
    }

    const updateActiveSection = () => {
      const activationLine = 110;
      let nextActiveHref = links[0]?.href ?? "";

      for (let index = 0; index < headings.length; index += 1) {
        const heading = headings[index];
        const rect = heading.getBoundingClientRect();

        if (rect.top <= activationLine) {
          nextActiveHref = links[index]?.href ?? nextActiveHref;
        }
      }

      setActiveHref(nextActiveHref);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [links]);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed bottom-4 left-1/2 z-50 w-fit -translate-x-1/2 rounded-full border border-[var(--card-border)] bg-[var(--card)] p-1.5 shadow-[0_10px_24px_rgba(15,23,42,0.12)] backdrop-blur-sm lg:sticky lg:top-10 lg:left-auto lg:z-auto lg:w-full lg:translate-x-0 lg:self-start lg:rounded-[2rem] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none"
    >
      <ul className="flex items-center gap-1 lg:flex-col lg:items-start lg:gap-3">
        {links.map(({ href, label }) => {
          const Icon = getIcon(label);
          const isActive = activeHref === href;

          return (
            <li key={href} className="lg:w-full">
              <a
                href={href}
                aria-label={label}
                aria-current={isActive ? "location" : undefined}
                className={[
                  "flex items-center justify-center rounded-full border text-[var(--text-soft)] transition-all",
                  "h-11 w-11 border-transparent hover:bg-[var(--card-hover)] hover:text-[var(--text-strong)]",
                  "lg:h-auto lg:w-full lg:justify-start lg:rounded-[1rem] lg:px-3 lg:py-2 lg:text-left",
                  isActive
                    ? "border-[var(--card-border)] bg-[var(--card-hover)] text-[var(--text-strong)] shadow-[0_6px_18px_rgba(15,23,42,0.08)] ring-1 ring-[color:var(--card-border)]"
                    : "",
                ].join(" ")}
              >
                <Icon className="h-[1.05rem] w-[1.05rem] lg:hidden" strokeWidth={1.9} />
                <span className="hidden text-[0.98rem] font-medium tracking-[-0.02em] lg:inline">
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
