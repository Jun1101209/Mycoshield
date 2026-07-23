'use client';

import { ArrowRight } from 'lucide-react';
import { FARMER_AN_OPEN_EVENT, FarmerSvg } from '@/components/sections/FarmerAn';

/**
 * A prominent call-to-action that opens the Farmer An modal from within the
 * page flow, so the guided story is easy to find without hunting for the
 * corner launcher.
 */
export function AskFarmerAn() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(FARMER_AN_OPEN_EVENT))}
      className="group inline-flex items-center gap-4 rounded-full border border-botanical/30 bg-surface py-2.5 pl-2.5 pr-6 shadow-card-hover ring-1 ring-botanical/10 transition-all hover:-translate-y-0.5 hover:border-botanical/50 hover:shadow-lift"
    >
      <span className="relative flex h-12 w-12 items-center justify-center">
        <span
          className="absolute inset-0 rounded-full bg-botanical/30 animate-ring-pulse motion-reduce:hidden"
          aria-hidden
        />
        <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-botanical-soft ring-2 ring-botanical/30">
          <FarmerSvg className="h-10 w-10" />
        </span>
      </span>
      <span className="flex flex-col items-start leading-tight text-left">
        <span className="font-serif text-base font-semibold text-ink">Meet Farmer An</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-botanical">
          Guided story · 1 min
        </span>
      </span>
      <ArrowRight
        className="h-4 w-4 text-botanical transition-transform group-hover:translate-x-0.5"
        strokeWidth={2.25}
        aria-hidden
      />
    </button>
  );
}
