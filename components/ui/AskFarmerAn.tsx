'use client';

import { Sparkles } from 'lucide-react';
import { FARMER_AN_OPEN_EVENT } from '@/components/sections/FarmerAn';

/**
 * A prompt that opens the Farmer An modal from within the page flow, so the
 * guided story is reachable without hunting for the corner launcher.
 */
export function AskFarmerAn() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(FARMER_AN_OPEN_EVENT))}
      className="group inline-flex items-center gap-2 rounded-full border border-botanical/30 bg-botanical-soft/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-botanical transition-colors hover:border-botanical/50 hover:bg-botanical-soft"
    >
      <Sparkles className="h-4 w-4" strokeWidth={2} aria-hidden />
      Meet Farmer An for the full picture
    </button>
  );
}
