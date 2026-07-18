'use client';

import { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

/**
 * Aspect-ratio-locked image container with a gradient placeholder underneath.
 * If the file is missing (user hasn't dropped it in yet) the placeholder + a
 * quiet label stay visible — the reserved box means zero layout shift either way.
 */
export function ImageSlot({
  src,
  alt,
  ratio = '4 / 3',
  className,
  gradient = 'from-botanical/25 via-emerald-700/15 to-amber/20',
  label,
  overlay,
  rounded = 'rounded-2xl',
}: {
  src: string;
  alt: string;
  ratio?: string;
  className?: string;
  gradient?: string;
  label?: string;
  overlay?: React.ReactNode;
  rounded?: string;
}) {
  const [ok, setOk] = useState(true);

  return (
    <div
      className={cn('relative overflow-hidden bg-mist', rounded, className)}
      style={{ aspectRatio: ratio }}
    >
      <div
        className={cn('absolute inset-0 bg-gradient-to-br', gradient)}
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />

      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(src)}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-botanical/70">
          <ImageIcon className="h-7 w-7" strokeWidth={1.5} aria-hidden />
          {label && (
            <span className="font-mono text-[11px] uppercase tracking-[0.12em]">
              {label}
            </span>
          )}
        </div>
      )}

      {overlay && <div className="absolute inset-0">{overlay}</div>}
    </div>
  );
}
