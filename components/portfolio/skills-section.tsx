import type { ReactNode } from "react";
import { SkillPill } from "@/components/portfolio/skill-pill";

type Skill = {
  name: string;
  icon: ReactNode;
};

type SkillsSectionProps = {
  skills: Skill[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section
      id="technologies"
      className="mt-4 scroll-mt-24 border-t border-[var(--card-border)] px-5 pt-4 sm:px-8"
    >
      <div className="space-y-4">
        <p
          data-section-heading="technologies"
          className="font-mono text-[1.12rem] uppercase tracking-[0.24em] text-[var(--text-soft)] sm:text-[1.22rem]"
        >
          Technologies
        </p>
        <div className="flex flex-wrap gap-2.5">
          {skills.map(({ name, icon }) => (
            <SkillPill key={name} name={name} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
