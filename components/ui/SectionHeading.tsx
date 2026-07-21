import { cn } from '@/lib/cn';
import { Reveal } from './Reveal';

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

/**
 * Consistent section header: an optional big serif chapter number, a mono
 * eyebrow, the h2, and an optional lede. The chapter number gives each section a
 * clear, memorable anchor so they stop blurring together on a skim.
 */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  accent = 'green',
  index,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: 'left' | 'center';
  accent?: 'green' | 'ochre' | 'signal';
  index?: string;
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
          'mb-4 flex items-center gap-3',
          align === 'center' && 'justify-center',
        )}
      >
        {index && (
          <>
            <span
              className={cn('font-serif text-4xl font-semibold leading-none', accents[accent])}
            >
              {index}
            </span>
            <span className="h-7 w-px bg-hairline" aria-hidden />
          </>
        )}
        <div
          className={cn(
            'flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em]',
            accents[accent],
          )}
        >
          <span className={cn('h-1.5 w-1.5 rounded-full', accentDots[accent])} aria-hidden />
          {eyebrow}
        </div>
      </div>
      <h2 className="text-[clamp(1.75rem,4vw,2.625rem)] leading-[1.12]">{title}</h2>
      {lede && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lede}</p>
      )}
    </Reveal>
  );
}
