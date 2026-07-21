import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

/**
 * Consistent section header: mono eyebrow + h2 + optional lede. Centralising
 * this enforces identical header padding/hierarchy across every module.
 */
const accents = {
  green: 'text-botanical',
  ochre: 'text-amber-deep',
  signal: 'text-signal-deep',
} as const;

const accentDots = {
  green: 'bg-botanical',
  ochre: 'bg-amber-deep',
  signal: 'bg-signal-deep',
} as const;

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  accent = 'green',
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: 'left' | 'center';
  accent?: 'green' | 'ochre' | 'signal';
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <div
        className={cn(
          'mb-4 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em]',
          accents[accent],
          align === 'center' && 'justify-center',
        )}
      >
        <span className={cn('h-1.5 w-1.5 rounded-full', accentDots[accent])} aria-hidden />
        {eyebrow}
      </div>
      <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.12]">{title}</h2>
      {lede && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lede}</p>
      )}
    </Reveal>
  );
}
