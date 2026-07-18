'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Count-up display that animates every integer run inside `value` in sync when
 * it scrolls into view. Handles ranges and symbols, e.g. "45–62%", "3×", "97%".
 * Reserves layout with the final string so there's no shift while animating.
 */
export function MetricCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : dim(value));

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(value);
      return;
    }
    const numbers = [...value.matchAll(/\d+/g)].map((m) => parseInt(m[0], 10));
    if (numbers.length === 0) {
      setDisplay(value);
      return;
    }

    const duration = 1100;
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      let i = 0;
      const next = value.replace(/\d+/g, () => {
        const target = numbers[i++];
        return String(Math.round(target * eased));
      });
      setDisplay(next);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums" aria-label={value}>
      {display}
    </span>
  );
}

// Zero-out numeric runs for the pre-animation state so width stays stable.
function dim(value: string): string {
  return value.replace(/\d/g, '0');
}
