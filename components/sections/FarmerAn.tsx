'use client';

import { useEffect, useRef, useState } from 'react';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Scene = { tag: string; cap: string; accent: string };

// The guided Farmer An story: scan, diagnosis, then the MycoShield Plus
// features. Kept to plain narration — no telemetry chips, those live in the
// Hero where the numbers actually mean something.
const scenes: Scene[] = [
  {
    tag: 'Meet Farmer An',
    cap: 'Hi, I’m Farmer An. Let’s look at what is happening under this rice field.',
    accent: 'text-botanical',
  },
  {
    tag: 'Satellite scanning',
    cap: 'Sentinel-2 reads crop stress from orbit, while Sentinel-1 radar tracks soil moisture through cloud and storm.',
    accent: 'text-signal-deep',
  },
  {
    tag: 'Diagnosis',
    cap: 'The crop still looks green, but the fungal network below has thinned, so water and nutrients no longer reach the roots.',
    accent: 'text-alert',
  },
  {
    tag: 'The Myco-Pellet fix',
    cap: 'A bagasse shell and coconut-coir core carry native AMF straight to the root zone, where colonization begins naturally.',
    accent: 'text-botanical',
  },
  {
    tag: 'For organizations',
    cap: 'Here is how the platform supports farmers, agribusinesses and public recovery programs at scale.',
    accent: 'text-botanical',
  },
  {
    tag: 'SaaS dashboard · B2B',
    cap: 'Agribusinesses and crop insurers subscribe to our live risk dashboard, protecting supply chains and pricing payouts with real data.',
    accent: 'text-signal-deep',
  },
  {
    tag: 'Relief procurement · B2G',
    cap: 'We supply Myco-Pellets in bulk to FAO, UNDP and national ministries, standard issue in post-flood and post-drought recovery kits.',
    accent: 'text-amber-deep',
  },
  {
    tag: 'Free for smallholders',
    cap: 'Premium subscriptions, carbon credits and consulting fund restoration that reaches smallholder farmers at no cost.',
    accent: 'text-botanical',
  },
];

/** Fire this to open Farmer An from anywhere on the page. */
export const FARMER_AN_OPEN_EVENT = 'farmer-an:open';

/**
 * "Farmer An", the brand mascot. A prominent corner launcher opens the guided
 * story as a centered modal (dimmed backdrop, toggle on/off). Any element on
 * the page can open it by dispatching the FARMER_AN_OPEN_EVENT window event.
 * Motion is CSS-only and eases out under prefers-reduced-motion.
 */
export function FarmerAn() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const scene = scenes[step];
  const last = step === scenes.length - 1;

  // Let other sections open the modal (e.g. the "Ask Farmer An" prompt).
  useEffect(() => {
    const onOpen = () => {
      setStep(0);
      setOpen(true);
    };
    window.addEventListener(FARMER_AN_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(FARMER_AN_OPEN_EVENT, onOpen);
  }, []);

  // Keyboard controls + body scroll lock while the modal is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setStep((s) => Math.min(scenes.length - 1, s + 1));
      if (e.key === 'ArrowLeft') setStep((s) => Math.max(0, s - 1));
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Centered modal */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Meet Farmer An"
            className="relative flex max-h-[calc(100vh-2rem)] w-[min(30rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-hairline bg-surface shadow-lift animate-pop-in"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-surface/70 text-ink-muted backdrop-blur transition-colors hover:bg-mist hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={2} aria-hidden />
            </button>

            <div className="flex flex-col items-center gap-3 bg-botanical-soft/60 px-6 pb-6 pt-8 text-center">
              <FarmerSvg className="h-28 w-28 shrink-0 animate-bob" />
              <div>
                <div className={cn('font-mono text-[11px] uppercase tracking-[0.16em]', scene.accent)}>
                  {scene.tag}
                </div>
                <p className="mx-auto mt-2 max-w-sm font-serif text-lg leading-snug text-ink">
                  {scene.cap}
                </p>
              </div>
            </div>

            <div className="px-6 py-5">
              {last && (
                <div className="mb-4 flex justify-center">
                  <a
                    href="mailto:habisbabi.contactforwork@gmail.com"
                    className="inline-flex items-center gap-1.5 rounded-full bg-botanical px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-botanical-deep"
                  >
                    Talk to the team
                    <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                  </a>
                </div>
              )}

              {/* progress + controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5" aria-hidden>
                  {scenes.map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        'h-1.5 rounded-full transition-all',
                        i === step ? 'w-4 bg-botanical' : 'w-1.5 bg-hairline',
                      )}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    aria-label="Previous"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-muted transition-colors hover:text-ink disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </button>
                  <button
                    onClick={() => setStep((s) => Math.min(scenes.length - 1, s + 1))}
                    disabled={last}
                    aria-label="Next"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-muted transition-colors hover:text-ink disabled:opacity-40"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Prominent corner launcher */}
      <button
        onClick={() => {
          setOpen((v) => !v);
          if (!open) setStep(0);
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={open ? 'Close Farmer An' : 'Meet Farmer An'}
        className="group fixed bottom-5 right-5 z-[70] flex items-center gap-3 rounded-full border border-botanical/25 bg-surface py-2 pl-2 pr-5 shadow-card-hover ring-1 ring-botanical/10 transition-all hover:-translate-y-0.5 hover:shadow-lift sm:bottom-6 sm:right-6"
      >
        <span className="relative flex h-14 w-14 items-center justify-center">
          {!open && (
            <span
              className="absolute inset-0 rounded-full bg-botanical/40 animate-ring-pulse motion-reduce:hidden"
              aria-hidden
            />
          )}
          <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-botanical-soft ring-2 ring-botanical/30">
            <FarmerSvg className="h-12 w-12" />
          </span>
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span className="font-serif text-[15px] font-semibold text-ink">
            {open ? 'Close' : 'Farmer An'}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-botanical">
            {open ? 'tap to hide' : 'tap to meet'}
          </span>
        </span>
      </button>
    </>
  );
}

/** Compact Vietnamese farmer bust with a nón lá. Flat vectors, no gradients. */
function FarmerSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="Farmer An">
      <ellipse cx="60" cy="112" rx="30" ry="5" fill="#13241C" opacity="0.14" />
      <path d="M34 112 C36 88 46 78 60 78 C74 78 84 88 86 112 Z" fill="#1F6B43" stroke="#E4F0E4" strokeWidth="1.2" />
      <path d="M52 82 L60 96 L68 82" fill="none" stroke="#F4EAD3" strokeWidth="2" opacity="0.7" />
      <path d="M46 86 C53 92 67 92 74 86 L76 94 C67 100 53 100 44 94 Z" fill="#F4EAD3" />
      <path d="M45 90 H75 M52 85 V96 M60 87 V98 M68 86 V96" stroke="#C6902F" strokeWidth="1.1" opacity="0.75" />
      <rect x="54" y="66" width="12" height="14" rx="5" fill="#D39A6A" />
      <ellipse cx="60" cy="52" rx="20" ry="21" fill="#D39A6A" />
      <path d="M43 48 C48 34 72 34 77 48 C70 41 50 41 43 48 Z" fill="#2A1A10" opacity="0.7" />
      <path d="M28 48 C44 24 60 18 60 18 C60 18 76 24 92 48 Z" fill="#D8C47A" stroke="#F4EAD3" strokeWidth="1.2" />
      <path d="M25 49 C52 58 68 58 95 49 C72 45 48 45 25 49 Z" fill="#C5AD61" stroke="#F4EAD3" strokeWidth="1" />
      <path d="M60 20 L44 49 M60 20 L76 49 M60 20 L60 51" stroke="#8E713C" strokeWidth="0.9" opacity="0.5" />
      <ellipse cx="41" cy="55" rx="4" ry="6" fill="#C9875F" />
      <ellipse cx="79" cy="55" rx="4" ry="6" fill="#C9875F" />
      <ellipse cx="52" cy="53" rx="3.2" ry="4.2" fill="#2B1B14" />
      <ellipse cx="68" cy="53" rx="3.2" ry="4.2" fill="#2B1B14" />
      <circle cx="53.2" cy="51.5" r="1" fill="#fff" />
      <circle cx="69.2" cy="51.5" r="1" fill="#fff" />
      <ellipse cx="46" cy="61" rx="4" ry="2.4" fill="#C25A44" opacity="0.4" />
      <ellipse cx="74" cy="61" rx="4" ry="2.4" fill="#C25A44" opacity="0.4" />
      <path d="M54 64 Q60 69 66 64" stroke="#7A4430" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
