"use client";

import { BriefcaseBusiness, Cpu, FolderOpen } from "lucide-react";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

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

function getHeadingEntries(links: SectionLink[]) {
  return links
    .map(({ href }) => {
      const sectionName = href.slice(1);
      const heading = document.querySelector<HTMLElement>(
        `[data-section-heading="${sectionName}"]`,
      );

      if (!heading) {
        return null;
      }

      return { href, heading };
    })
    .filter(
      (
        entry,
      ): entry is {
        href: string;
        heading: HTMLElement;
      } => entry !== null,
    );
}

function getActiveHrefForScroll(links: SectionLink[]) {
  const headingEntries = getHeadingEntries(links);

  if (headingEntries.length === 0) {
    return null;
  }

  const activationY = window.scrollY + 180;
  let nextActiveHref = headingEntries[0]?.href ?? null;

  for (const { href, heading } of headingEntries) {
    const headingY = window.scrollY + heading.getBoundingClientRect().top;

    if (headingY <= activationY) {
      nextActiveHref = href;
    }
  }

  return nextActiveHref;
}

export function SectionNav({ links }: SectionNavProps) {
  const [activeHref, setActiveHref] = useState<string>(links[0]?.href ?? "");
  const navigationLockRef = useRef(false);
  const unlockTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (getHeadingEntries(links).length === 0) {
      return;
    }

    const releaseNavigationLock = () => {
      navigationLockRef.current = false;
      unlockTimeoutRef.current = null;

      const nextActiveHref = getActiveHrefForScroll(links);

      if (nextActiveHref) {
        setActiveHref(nextActiveHref);
      }
    };

    const scheduleNavigationUnlock = () => {
      if (!navigationLockRef.current) {
        return;
      }

      if (unlockTimeoutRef.current !== null) {
        window.clearTimeout(unlockTimeoutRef.current);
      }

      unlockTimeoutRef.current = window.setTimeout(() => {
        releaseNavigationLock();
      }, 90);
    };

    const updateActiveSection = () => {
      if (navigationLockRef.current) {
        scheduleNavigationUnlock();
        return;
      }

      const nextActiveHref = getActiveHrefForScroll(links);

      if (nextActiveHref) {
        setActiveHref(nextActiveHref);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("popstate", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("popstate", updateActiveSection);

      if (unlockTimeoutRef.current !== null) {
        window.clearTimeout(unlockTimeoutRef.current);
      }
    };
  }, [links]);

    const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      setActiveHref(href);
      navigationLockRef.current = true;

      if (unlockTimeoutRef.current !== null) {
        window.clearTimeout(unlockTimeoutRef.current);
        unlockTimeoutRef.current = null;
      }

    const headingEntry = getHeadingEntries(links).find(
      (entry) => entry.href === href,
    );

    if (!headingEntry) {
      return;
    }

    const top =
      window.scrollY + headingEntry.heading.getBoundingClientRect().top - 96;

    window.history.pushState(null, "", href);
    window.scrollTo({
      top: Math.max(0, top),
      behavior: "auto",
    });
    unlockTimeoutRef.current = window.setTimeout(() => {
      navigationLockRef.current = false;
      unlockTimeoutRef.current = null;

      const settledHref = getActiveHrefForScroll(links);

      if (settledHref) {
        setActiveHref(settledHref);
      }
    }, 90);
  };

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
                onClick={(event) => handleNavigate(event, href)}
                className={[
                  "group flex items-center justify-center rounded-full border text-[var(--text-soft)] transition-colors duration-100",
                  "h-11 w-11 border-transparent hover:bg-[var(--card-hover)] hover:text-[var(--text-strong)]",
                  "lg:h-auto lg:w-full lg:justify-start lg:rounded-[1rem] lg:px-3 lg:py-2 lg:text-left",
                  isActive
                    ? "border-[var(--card-border)] bg-[linear-gradient(180deg,var(--card-hover),color-mix(in srgb,var(--card-hover) 78%,transparent))] text-[var(--text-strong)] lg:pl-2.5"
                    : "",
                ].join(" ")}
              >
                <span
                  aria-hidden="true"
                  className={[
                    "mr-0 hidden h-2.5 w-1 rounded-full bg-[var(--text-strong)] lg:mr-2 lg:block",
                    isActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
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
