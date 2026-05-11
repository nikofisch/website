import type { ReactNode } from "react";

const toneClasses = {
  blue: "bg-sky-100 text-sky-900 hover:bg-sky-500 hover:text-white",
  lavender:
    "bg-violet-100 text-violet-900 hover:bg-violet-500 hover:text-white",
  mint: "bg-emerald-100 text-emerald-900 hover:bg-emerald-500 hover:text-white",
  peach: "bg-orange-100 text-orange-900 hover:bg-orange-500 hover:text-white",
  yellow: "bg-amber-100 text-amber-900 hover:bg-amber-500 hover:text-white",
  pink: "bg-rose-100 text-rose-900 hover:bg-rose-500 hover:text-white",
  rose: "bg-pink-100 text-pink-900 hover:bg-pink-500 hover:text-white",
} as const;

type HighlightTone = keyof typeof toneClasses;

type HighlightProps = {
  children: ReactNode;
  tone?: HighlightTone;
};

export function Highlight({ children, tone = "blue" }: HighlightProps) {
  return (
    <span
      className={`inline rounded-[0.4rem] px-1.5 py-0.5 transition-colors duration-150 ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
