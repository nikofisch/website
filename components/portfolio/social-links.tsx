import type { LucideIcon } from "lucide-react";

type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type SocialLinksProps = {
  links: SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-1.5 text-[var(--icon)]">
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent hover:border-[var(--card-border)] hover:bg-[var(--card-hover)] hover:text-[var(--text-strong)]"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="h-4 w-4" strokeWidth={2} />
        </a>
      ))}
    </div>
  );
}
