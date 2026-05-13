"use client";

import { useEffect, useState } from "react";

export type AnimatedNameVariant = {
  value: string;
  lang?: string;
  dir?: "ltr" | "rtl";
};

const DELETE_SPEED_MS = 190;
const TYPE_SPEED_MS = 305;
const HOLD_MS = 3500;
const INITIAL_HOLD_MS = 60000;

type AnimatedNameProps = {
  originalName: string;
  variants: AnimatedNameVariant[];
};

export function AnimatedName({
  originalName,
  variants,
}: AnimatedNameProps) {
  const sizingVariants = [
    { value: originalName, lang: "en", dir: "ltr" as const },
    ...variants,
  ];
  const [displayedName, setDisplayedName] = useState(originalName);
  const [activeVariant, setActiveVariant] = useState<AnimatedNameVariant>({
    value: originalName,
    lang: "en",
    dir: "ltr",
  });

  useEffect(() => {
    const originalVariant: AnimatedNameVariant = {
      value: originalName,
      lang: "en",
      dir: "ltr",
    };

    if (variants.length === 0) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cancelled = false;
    const timeouts = new Set<number>();
    const sequence = [...variants, originalVariant];
    let currentText = originalName;

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        const timeoutId = window.setTimeout(() => {
          timeouts.delete(timeoutId);
          resolve();
        }, duration);

        timeouts.add(timeoutId);
      });

    const runAnimation = async () => {
      await wait(INITIAL_HOLD_MS);

      while (!cancelled) {
        for (const variant of sequence) {
          while (!cancelled && currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            setDisplayedName(currentText);
            await wait(DELETE_SPEED_MS);
          }

          setActiveVariant(variant);

          for (const character of Array.from(variant.value)) {
            if (cancelled) {
              return;
            }

            currentText += character;
            setDisplayedName(currentText);
            await wait(TYPE_SPEED_MS);
          }

          await wait(HOLD_MS);
        }
      }
    };

    void runAnimation();

    return () => {
      cancelled = true;

      for (const timeoutId of timeouts) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [originalName, variants]);

  return (
    <span
      lang={activeVariant.lang}
      dir={activeVariant.dir ?? "ltr"}
      className="inline-grid whitespace-nowrap"
    >
      <span
        aria-hidden="true"
        className="col-start-1 row-start-1 grid invisible"
      >
        {sizingVariants.map((variant) => (
          <span
            key={`${variant.lang ?? "plain"}-${variant.value}`}
            lang={variant.lang}
            dir={variant.dir ?? "ltr"}
            className="col-start-1 row-start-1 block"
          >
            {variant.value}
          </span>
        ))}
      </span>
      <span className="col-start-1 row-start-1 inline-flex items-baseline">
        <span>{displayedName}</span>
        <span
          aria-hidden="true"
          className="inline-block h-[0.9em] w-[0.08em] rounded-full bg-current align-[-0.08em] [animation:cursor-blink_1.2s_ease-in-out_infinite]"
          style={{ marginInlineStart: "0.06em" }}
        />
      </span>
    </span>
  );
}
