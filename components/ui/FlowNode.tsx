import { cn } from '@/lib/cn';
import type { LucideIcon } from 'lucide-react';

type Tone = 'neutral' | 'alert' | 'amber' | 'botanical';

const tones: Record<Tone, { ring: string; icon: string; iconBg: string }> = {
  neutral: { ring: 'border-hairline', icon: 'text-ink-muted', iconBg: 'bg-mist' },
  alert: { ring: 'border-red-200', icon: 'text-red-600', iconBg: 'bg-red-50' },
  amber: { ring: 'border-amber-deep/25', icon: 'text-amber-deep', iconBg: 'bg-amber-soft/60' },
  botanical: { ring: 'border-botanical/25', icon: 'text-botanical', iconBg: 'bg-botanical-soft/50' },
};

/**
 * A single step in a horizontal/vertical flow chart (soil-crisis, business model).
 */
export function FlowNode({
  icon: Icon,
  step,
  title,
  body,
  tone = 'neutral',
  className,
}: {
  icon: LucideIcon;
  step?: string;
  title: string;
  body?: string;
  tone?: Tone;
  className?: string;
}) {
  const t = tones[tone];
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-2xl border bg-surface p-5 shadow-card',
        t.ring,
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl',
            t.iconBg,
          )}
        >
          <Icon className={cn('h-5 w-5', t.icon)} strokeWidth={1.75} aria-hidden />
        </span>
        {step && (
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
            {step}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-base font-bold leading-snug text-ink">{title}</h3>
      {body && <p className="mt-2 text-sm leading-relaxed text-ink-muted">{body}</p>}
    </div>
  );
}
