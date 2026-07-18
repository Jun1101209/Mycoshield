import { cn } from '@/lib/cn';

/**
 * Mono-font readout chip — the single stylistic bridge to the original site's
 * "NDVI Δ" telemetry labels, restrained into the light aesthetic.
 */
export function DataChip({
  children,
  className,
  live = false,
}: {
  children: React.ReactNode;
  className?: string;
  live?: boolean;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-lg border border-hairline bg-surface/90 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted backdrop-blur',
        className,
      )}
    >
      {live && (
        <span className="h-1.5 w-1.5 rounded-full bg-botanical animate-pulse-dot" aria-hidden />
      )}
      {children}
    </span>
  );
}
