import { cn } from '@/lib/cn';

/**
 * Functional card structured with a hairline border + soft ambient shadow —
 * never thick/dark borders. `interactive` adds the hover lift for clickable cards.
 */
export function Card({
  children,
  className,
  interactive = false,
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-hairline bg-surface shadow-card',
        interactive &&
          'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover hover:border-ink/15',
        className,
      )}
    >
      {children}
    </div>
  );
}
