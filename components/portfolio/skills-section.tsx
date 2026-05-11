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
    <section className="mt-10 border-t border-[var(--card-border)] px-5 pt-10 sm:px-8">
      <div className="space-y-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[var(--text-soft)]">
            technologies
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--text-strong)] sm:text-3xl">
            lorem ipsum dolor sit amet
          </h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {skills.map(({ name, icon }) => (
            <SkillPill key={name} name={name} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
