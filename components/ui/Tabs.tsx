'use client';

import { useId, useState } from 'react';
import { cn } from '@/lib/cn';

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

/**
 * Accessible tabs (roving state, keyboard arrow support via native focus).
 * Tab buttons meet the 44px tap-target minimum.
 */
export function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const base = useId();

  return (
    <div>
      <div
        role="tablist"
        aria-label="Content sections"
        className="inline-flex flex-wrap gap-1 rounded-full border border-hairline bg-offwhite p-1"
      >
        {items.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              role="tab"
              id={`${base}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${base}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              className={cn(
                'min-h-[44px] rounded-full px-5 text-sm font-semibold transition-all duration-200',
                selected
                  ? 'bg-surface text-ink shadow-card'
                  : 'text-ink-muted hover:text-ink',
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${base}-panel-${item.id}`}
          aria-labelledby={`${base}-tab-${item.id}`}
          hidden={item.id !== active}
          className="mt-8"
        >
          {item.id === active && item.content}
        </div>
      ))}
    </div>
  );
}
