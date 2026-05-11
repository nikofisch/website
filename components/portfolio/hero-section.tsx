import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { SocialLinks } from "@/components/portfolio/social-links";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
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
    <section className="rounded-[2rem] px-5 py-6 sm:px-8 sm:py-8">
      <div className="flex flex-col gap-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-8">
          <div className="max-w-4xl space-y-4">
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--text-strong)] sm:text-6xl">
              {name}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-[1.15rem]">
              {intro}
            </p>
          </div>
          <div className="flex items-center gap-2 self-start lg:justify-self-end lg:pt-2">
            <ThemeToggle />
            <SocialLinks links={socialLinks} />
          </div>
        </div>

        <div className="max-w-3xl space-y-4 text-[0.97rem] leading-8 text-[var(--text-soft)] sm:text-lg">
          <p className="font-semibold text-[var(--text-muted)]">
            some cool things I&apos;ve done in the past:
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
