import type { ReactNode } from "react";
import { SocialLinks } from "@/components/portfolio/social-links";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

type HeroSectionProps = {
  name: string;
  intro: string;
  items: ReactNode[];
  socialLinks: SocialLink[];
};

export function HeroSection({
  name,
  intro,
  items,
  socialLinks,
}: HeroSectionProps) {
  return (
    <section className="rounded-[2rem] px-5 py-4 sm:px-8 sm:py-6">
      <div className="flex flex-col gap-4">
        <div className="space-y-3">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-5">
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--text-strong)] sm:text-6xl">
              {name}
            </h1>
            <div className="flex items-center gap-2 self-start lg:translate-x-3 lg:justify-self-end lg:self-center">
              <ThemeToggle />
              <SocialLinks links={socialLinks} />
            </div>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-[1.15rem]">
            {intro}
          </p>
        </div>

        <div className="max-w-3xl space-y-3 text-[0.97rem] leading-7 text-[var(--text-soft)] sm:text-lg">
          <p className="font-semibold text-[var(--text-muted)]">
            About me:
          </p>
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="pt-1 text-[var(--icon)]" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
