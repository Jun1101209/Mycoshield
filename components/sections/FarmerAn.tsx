'use client';

import { useEffect, useRef, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

const facts = ['Live regional dashboards', 'Bulk relief supply', 'Soil carbon markets'];

/**
 * "Farmer An", a small, friendly brand mascot. Streamlined from the original
 * full-screen story into a lightweight popover: a floating button opens a
 * compact card with a hand-drawn SVG farmer and a short message. All motion is
 * CSS-only (a gentle bob) and paused under prefers-reduced-motion.
 */
export function FarmerAn() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
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
          className="w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-hairline bg-surface shadow-lift"
        >
          <div className="relative flex items-center gap-3 bg-botanical-soft/60 px-5 pb-4 pt-5">
            <FarmerSvg className="h-20 w-20 shrink-0 animate-bob" />
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-botanical">
                Meet Farmer An
              </div>
              <p className="mt-1 font-serif text-[15px] leading-snug text-ink">
                Hi, I&rsquo;m An. Let&rsquo;s see what is happening under this field.
              </p>
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
            <p className="text-sm leading-relaxed text-ink-muted">
              MycoShield Plus runs across whole regions. One system, three jobs:
            </p>
            <ul className="mt-3 space-y-2">
              {facts.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink-body">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="mailto:habisbabi.contactforwork@gmail.com"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-botanical hover:text-botanical-deep"
            >
              Talk to the team
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </a>
          </div>
        </div>
      )}

      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
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
      {/* áo bà ba body */}
      <path
        d="M34 112 C36 88 46 78 60 78 C74 78 84 88 86 112 Z"
        fill="#1F6B43"
        stroke="#E4F0E4"
        strokeWidth="1.2"
      />
      {/* collar */}
      <path d="M52 82 L60 96 L68 82" fill="none" stroke="#F4EAD3" strokeWidth="2" opacity="0.7" />
      {/* khăn rằn scarf */}
      <path d="M46 86 C53 92 67 92 74 86 L76 94 C67 100 53 100 44 94 Z" fill="#F4EAD3" />
      <path
        d="M45 90 H75 M52 85 V96 M60 87 V98 M68 86 V96"
        stroke="#C6902F"
        strokeWidth="1.1"
        opacity="0.75"
      />
      {/* neck */}
      <rect x="54" y="66" width="12" height="14" rx="5" fill="#D39A6A" />
      {/* face */}
      <ellipse cx="60" cy="52" rx="20" ry="21" fill="#D39A6A" />
      {/* hair line */}
      <path d="M43 48 C48 34 72 34 77 48 C70 41 50 41 43 48 Z" fill="#2A1A10" opacity="0.7" />
      {/* nón lá */}
      <path d="M28 48 C44 24 60 18 60 18 C60 18 76 24 92 48 Z" fill="#D8C47A" stroke="#F4EAD3" strokeWidth="1.2" />
      <path d="M25 49 C52 58 68 58 95 49 C72 45 48 45 25 49 Z" fill="#C5AD61" stroke="#F4EAD3" strokeWidth="1" />
      <path d="M60 20 L44 49 M60 20 L76 49 M60 20 L60 51" stroke="#8E713C" strokeWidth="0.9" opacity="0.5" />
      {/* ears */}
      <ellipse cx="41" cy="55" rx="4" ry="6" fill="#C9875F" />
      <ellipse cx="79" cy="55" rx="4" ry="6" fill="#C9875F" />
      {/* eyes */}
      <ellipse cx="52" cy="53" rx="3.2" ry="4.2" fill="#2B1B14" />
      <ellipse cx="68" cy="53" rx="3.2" ry="4.2" fill="#2B1B14" />
      <circle cx="53.2" cy="51.5" r="1" fill="#fff" />
      <circle cx="69.2" cy="51.5" r="1" fill="#fff" />
      {/* blush */}
      <ellipse cx="46" cy="61" rx="4" ry="2.4" fill="#C25A44" opacity="0.4" />
      <ellipse cx="74" cy="61" rx="4" ry="2.4" fill="#C25A44" opacity="0.4" />
      {/* smile */}
      <path d="M54 64 Q60 69 66 64" stroke="#7A4430" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
