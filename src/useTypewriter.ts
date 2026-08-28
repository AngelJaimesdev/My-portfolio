import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Cycles through `words`, typing and deleting one character at a time.
 * With reduced motion it just swaps the full word on an interval.
 */
export function useTypewriter(
  words: string[],
  { typeMs = 90, deleteMs = 45, holdMs = 1600 } = {}
) {
  const [text, setText] = useState(words[0] ?? "");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (words.length === 0) return;
    window.clearTimeout(timer.current);

    if (prefersReducedMotion()) {
      setText(words[0]);
      let i = 0;
      const id = window.setInterval(() => {
        i = (i + 1) % words.length;
        setText(words[i]);
      }, holdMs + 1200);
      return () => window.clearInterval(id);
    }

    let wordIndex = 0;
    let charIndex = words[0].length;
    let deleting = false;

    const tick = () => {
      const word = words[wordIndex];

      if (!deleting) {
        charIndex++;
        setText(word.slice(0, charIndex));
        if (charIndex >= word.length) {
          deleting = true;
          timer.current = window.setTimeout(tick, holdMs);
          return;
        }
        timer.current = window.setTimeout(tick, typeMs);
      } else {
        charIndex--;
        setText(word.slice(0, Math.max(charIndex, 0)));
        if (charIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer.current = window.setTimeout(tick, typeMs * 3);
          return;
        }
        timer.current = window.setTimeout(tick, deleteMs);
      }
    };

    timer.current = window.setTimeout(tick, holdMs);
    return () => window.clearTimeout(timer.current);
    // Re-run when the set of words changes (e.g. language switch).
  }, [words, typeMs, deleteMs, holdMs]);

  return text;
}
