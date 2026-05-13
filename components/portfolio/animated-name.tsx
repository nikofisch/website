"use client";

import { useEffect, useRef, useState } from "react";

export type AnimatedNameVariant = {
  value: string;
  lang?: string;
  dir?: "ltr" | "rtl";
};

const createOriginalVariant = (
  originalName: string,
): AnimatedNameVariant => ({
  value: originalName,
  lang: "en",
  dir: "ltr",
});

const DELETE_SPEED_MS = 190;
const TYPE_SPEED_MS = 305;
const HOLD_MS = 3500;
const PAUSE_POLL_MS = 50;

type AnimatedNameProps = {
  originalName: string;
  variants: AnimatedNameVariant[];
};

export function AnimatedName({
  originalName,
  variants,
}: AnimatedNameProps) {
  const originalVariant = createOriginalVariant(originalName);
  const sizingVariants = [
    originalVariant,
    ...variants,
  ];
  const [displayedName, setDisplayedName] = useState(originalName);
  const [activeVariant, setActiveVariant] =
    useState<AnimatedNameVariant>(originalVariant);
  const displayedNameRef = useRef(originalName);
  const activeVariantRef = useRef<AnimatedNameVariant>(originalVariant);
  const hoveredRef = useRef(false);
  const hoverRestoreRef = useRef<{
    displayedName: string;
    activeVariant: AnimatedNameVariant;
  } | null>(null);

  useEffect(() => {
    const originalVariant = createOriginalVariant(originalName);

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

    const sleep = (duration: number) =>
      new Promise<void>((resolve) => {
        const timeoutId = window.setTimeout(() => {
          timeouts.delete(timeoutId);
          resolve();
        }, duration);

        timeouts.add(timeoutId);
      });

    const wait = async (duration: number) => {
      let remaining = duration;

      while (!cancelled && remaining > 0) {
        if (hoveredRef.current) {
          await sleep(PAUSE_POLL_MS);
          continue;
        }

        const step = Math.min(remaining, PAUSE_POLL_MS);
        await sleep(step);
        remaining -= step;
      }
    };

    const waitForHoverEnd = async () => {
      while (!cancelled && hoveredRef.current) {
        await sleep(PAUSE_POLL_MS);
      }
    };

    const runAnimation = async () => {
      await wait(HOLD_MS);

      while (!cancelled) {
        for (const variant of sequence) {
          await waitForHoverEnd();

          while (!cancelled && currentText.length > 0) {
            await waitForHoverEnd();
            currentText = currentText.slice(0, -1);
            displayedNameRef.current = currentText;
            setDisplayedName(currentText);
            await wait(DELETE_SPEED_MS);
          }

          await waitForHoverEnd();
          activeVariantRef.current = variant;
          setActiveVariant(variant);

          for (const character of Array.from(variant.value)) {
            if (cancelled) {
              return;
            }

            await waitForHoverEnd();
            currentText += character;
            displayedNameRef.current = currentText;
            setDisplayedName(currentText);
            await wait(TYPE_SPEED_MS);
          }

          await wait(HOLD_MS);
        }
      }
    };

    displayedNameRef.current = originalName;
    activeVariantRef.current = originalVariant;
    hoverRestoreRef.current = null;
    hoveredRef.current = false;

    void runAnimation();

    return () => {
      cancelled = true;

      for (const timeoutId of timeouts) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [originalName, variants]);

  const handlePointerEnter = () => {
    if (hoveredRef.current) {
      return;
    }

    hoveredRef.current = true;
    hoverRestoreRef.current = {
      displayedName: displayedNameRef.current,
      activeVariant: activeVariantRef.current,
    };
    displayedNameRef.current = originalName;
    activeVariantRef.current = originalVariant;
    setDisplayedName(originalName);
    setActiveVariant(originalVariant);
  };

  const handlePointerLeave = () => {
    hoveredRef.current = false;

    if (!hoverRestoreRef.current) {
      return;
    }

    displayedNameRef.current = hoverRestoreRef.current.displayedName;
    activeVariantRef.current = hoverRestoreRef.current.activeVariant;
    setDisplayedName(hoverRestoreRef.current.displayedName);
    setActiveVariant(hoverRestoreRef.current.activeVariant);
    hoverRestoreRef.current = null;
  };

  return (
    <span
      lang={activeVariant.lang}
      dir={activeVariant.dir ?? "ltr"}
      className="inline-grid whitespace-nowrap"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
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
