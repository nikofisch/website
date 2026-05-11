import type { ReactNode } from "react";

type SkillPillProps = {
  name: string;
  icon: ReactNode;
};

export function SkillPill({ name, icon }: SkillPillProps) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] px-3.5 py-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--card-hover)]">
      <span className="text-[var(--icon)]">{icon}</span>
      <span>{name}</span>
    </div>
  );
}
