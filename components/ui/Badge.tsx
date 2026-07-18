import { cn } from '@/lib/cn';

type Tone = 'botanical' | 'amber' | 'neutral';

const tones: Record<Tone, string> = {
  botanical: 'border-botanical/25 text-botanical bg-botanical-soft/50',
  amber: 'border-amber-deep/30 text-amber-deep bg-amber-soft/60',
  neutral: 'border-hairline text-ink-muted bg-offwhite',
};

/**
 * High-contrast tag with a botanical-green border by default — one of the two
 * places the deep green is allowed per the design rules.
 */
export function Badge({
  children,
  tone = 'botanical',
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
