'use client';

import { cn } from '@/lib/cn';

export type ToggleOption = {
  id: string;
  label: string;
  sublabel?: string;
};

/**
 * Segmented two-way toggle used for the Delta-Shield / Hydro-Hydro product
 * switch. Controlled by the parent so the surrounding panel can react.
 */
export function Toggle({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: ToggleOption[];
  value: string;
  onChange: (id: string) => void;
  ariaLabel: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="grid w-full grid-cols-1 gap-2 rounded-2xl border border-hairline bg-offwhite p-1.5 sm:grid-cols-2"
    >
      {options.map((option) => {
        const selected = option.id === value;
        return (
          <button
            key={option.id}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.id)}
            className={cn(
              'flex min-h-[44px] flex-col items-start rounded-xl px-4 py-3 text-left transition-all duration-200',
              selected
                ? 'bg-surface shadow-card ring-1 ring-hairline'
                : 'hover:bg-surface/60',
            )}
          >
            <span
              className={cn(
                'text-sm font-bold',
                selected ? 'text-ink' : 'text-ink-muted',
              )}
            >
              {option.label}
            </span>
            {option.sublabel && (
              <span className="mt-0.5 text-xs text-ink-muted">{option.sublabel}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
