type WorkExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

type WorkExperienceSectionProps = {
  experiences: WorkExperienceEntry[];
};

export function WorkExperienceSection({
  experiences,
}: WorkExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="mt-6 scroll-mt-24 border-t border-[var(--card-border)] px-5 pt-4 sm:px-8"
    >
      <div className="space-y-4">
        <p
          data-section-heading="experience"
          className="font-mono text-[1.12rem] uppercase tracking-[0.24em] text-[var(--text-soft)] sm:text-[1.22rem]"
        >
          Work Experience
        </p>
        <div className="grid gap-2.5">
          {experiences.map(({ role, company, location, period, bullets }) => (
            <article
              key={`${company}-${role}-${period}`}
              className="rounded-[1.4rem] border border-[var(--card-border)] bg-[var(--card)] p-4 sm:p-5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--text-strong)]">
                    {role}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-soft)] sm:text-[0.95rem]">
                    {company} · {location}
                  </p>
                </div>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-soft)] sm:pt-1">
                  {period}
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--text-soft)] sm:text-[0.95rem]">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span aria-hidden="true" className="pt-[0.15rem]">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
