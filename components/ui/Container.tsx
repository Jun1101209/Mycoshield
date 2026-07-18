import { cn } from '@/lib/cn';

/**
 * Fixed max-width + consistent gutters everywhere. Centralising this keeps the
 * layout stable (no CLS from ad-hoc widths) and the rhythm consistent.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-content px-6 sm:px-8', className)}>
      {children}
    </div>
  );
}
