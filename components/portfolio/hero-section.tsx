import type { ReactNode } from "react";
import {
  AnimatedName,
  type AnimatedNameVariant,
} from "@/components/portfolio/animated-name";
import { SocialLinks } from "@/components/portfolio/social-links";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

type HeroSectionProps = {
  name: string;
  nameTranslations?: AnimatedNameVariant[];
  intro: string;
  items: ReactNode[];
  socialLinks: SocialLink[];
};

export function HeroSection({
  name,
  nameTranslations = [],
  intro,
  items,
  socialLinks,
}: HeroSectionProps) {
  return (
    <section className="rounded-[2rem] px-5 py-4 sm:px-8 sm:py-6">
      <div className="flex flex-col gap-4">
        <div className="space-y-3">
          <div className="space-y-4">
            <h1 className="min-w-0 flex-1 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--text-strong)] sm:text-6xl">
              {nameTranslations.length > 0 ? (
                <AnimatedName
                  originalName={name}
                  variants={nameTranslations}
                />
              ) : (
                name
              )}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
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
