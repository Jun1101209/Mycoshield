'use client';

import { useEffect, useRef, useState } from 'react';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Scene = { tag: string; cap: string; chip?: string; accent: string };

// Content lifted from the original Farmer An story, trimmed and em-dash free.
const scenes: Scene[] = [
  {
    tag: 'Meet Farmer An',
    cap: 'Hi, I’m Farmer An. Let’s check what is happening under this rice field.',
    accent: 'text-botanical',
  },
  {
    tag: 'Satellite scanning',
    cap: 'Pulling optical and radar readings from orbit, then matching them with soil-biology risk patterns.',
    chip: 'NDVI Δ −0.34 · SAR anomaly',
    accent: 'text-signal-deep',
  },
  {
    tag: 'Diagnosis',
    cap: 'This soil just lost 80% of its fungal network. The crop still looks green, but the system below is already stressed.',
    chip: '80% AM deficit',
    accent: 'text-alert',
  },
  {
    tag: 'MycoShield Plus',
    cap: 'Here is how our features support farmers, agribusinesses and public recovery programs at scale.',
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
    tag: 'Carbon markets',
    cap: 'Every buried pellet locks carbon two ways, Glomalin from living fungi and the biochar shell, verified and sold as ecological credits.',
    accent: 'text-botanical',
  },
  {
    tag: 'Soil consulting',
    cap: 'Our agronomists ground-truth your fields, design recovery protocols, and certify farms for regenerative and ESG standards.',
    accent: 'text-signal-deep',
  },
];

/**
 * "Farmer An", the brand mascot. Content is the original guided story (scan,
 * diagnosis, then the MycoShield Plus features), restyled into a compact
 * step-through popover so the heavy feature copy lives here instead of crowding
 * the page. Motion is CSS-only and paused under prefers-reduced-motion.
 */
export function FarmerAn() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const scene = scenes[step];
  const last = step === scenes.length - 1;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setStep((s) => Math.min(scenes.length - 1, s + 1));
      if (e.key === 'ArrowLeft') setStep((s) => Math.max(0, s - 1));
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || btnRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Meet Farmer An"
          className="w-[min(21rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-hairline bg-surface shadow-lift"
        >
          <div className="relative flex items-center gap-3 bg-botanical-soft/60 px-5 pb-4 pt-5">
            <FarmerSvg className="h-20 w-20 shrink-0 animate-bob" />
            <div className="min-w-0">
              <div className={cn('font-mono text-[10px] uppercase tracking-[0.16em]', scene.accent)}>
                {scene.tag}
              </div>
              <p className="mt-1 font-serif text-[15px] leading-snug text-ink">{scene.cap}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-ink-muted hover:bg-surface hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={2} aria-hidden />
            </button>
          </div>

          <div className="px-5 py-4">
            {scene.chip && (
              <span className="inline-flex rounded-md border border-hairline bg-mist px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                {scene.chip}
              </span>
            )}

            {last && (
              <a
                href="mailto:habisbabi.contactforwork@gmail.com"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-botanical hover:text-botanical-deep"
              >
                Talk to the team
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              </a>
            )}

            {/* progress + controls */}
            <div className="mt-4 flex items-center justify-between">
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
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  aria-label="Previous"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-ink-muted hover:text-ink disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
                </button>
                <button
                  onClick={() => setStep((s) => Math.min(scenes.length - 1, s + 1))}
                  disabled={last}
                  aria-label="Next"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-ink-muted hover:text-ink disabled:opacity-40"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        ref={btnRef}
        onClick={() => {
          setOpen((v) => !v);
          if (!open) setStep(0);
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={open ? 'Close Farmer An' : 'Ask Farmer An'}
        className="group flex items-center gap-2.5 rounded-full border border-hairline bg-surface py-1.5 pl-1.5 pr-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
      >
        <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-botanical-soft/70">
          <FarmerSvg className="h-10 w-10" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
          {open ? 'Close' : 'Ask Farmer An'}
        </span>
      </button>
    </div>
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
