import { ArrowRight, Satellite } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { DataChip } from '@/components/ui/DataChip';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { Reveal } from '@/components/ui/Reveal';

const stats = [
  { v: '97%', l: 'Root attachment' },
  { v: '3×', l: 'Faster recovery' },
  { v: '$0', l: 'To smallholders' },
];

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      {/* soft engineered backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.5]" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-signal-soft blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-offwhite"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy column */}
          <div className="max-w-xl">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                <Satellite className="h-3.5 w-3.5 text-botanical" strokeWidth={2} aria-hidden />
                Vietnam-ready agricultural intelligence
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-[clamp(2.35rem,5.4vw,4.15rem)] leading-[1.05]">
                The rice field looks alive.{' '}
                <em className="font-normal italic text-botanical">
                  Underground, the network is already breaking.
                </em>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink-body">
                After floods, storms and salt intrusion, mycorrhizal fungi collapse
                days before the crop shows it. MycoShield reads that invisible signal
                from orbit and from the soil, then ships the fix.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button as="a" href="#signal">
                  See how the scan works
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                </Button>
                <Button as="a" href="#contact" variant="outline">
                  Request a soil audit
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-hairline pt-6">
                {stats.map((s) => (
                  <div key={s.l}>
                    <dt className="font-serif text-3xl font-semibold tracking-tight text-ink">
                      {s.v}
                    </dt>
                    <dd className="mt-1 text-xs text-ink-muted">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Visual column */}
          <Reveal delay={0.15} className="relative">
            <div className="relative">
              <ImageSlot
                src="/images/hero-field.jpg"
                alt="Bright rice field under restoration monitoring"
                ratio="4 / 5"
                label="hero-field.jpg"
                className="shadow-lift ring-1 ring-hairline"
                gradient="from-botanical/30 via-signal/20 to-amber/25"
                overlay={
                  <>
                    <div
                      className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent"
                      aria-hidden
                    />
                    <div className="absolute left-4 top-4">
                      <DataChip live className="bg-white/85">
                        Field dashboard · live
                      </DataChip>
                    </div>
                  </>
                }
              />

              {/* floating telemetry cards */}
              <div className="absolute -left-4 bottom-16 hidden sm:block">
                <div className="rounded-xl border border-hairline bg-surface/95 px-4 py-3 shadow-card backdrop-blur">
                  <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                    NDVI Δ
                  </div>
                  <div className="mt-0.5 text-xl font-bold text-alert">−0.34</div>
                </div>
              </div>

              <div className="absolute -right-3 top-10 hidden sm:block">
                <DataChip className="bg-white/90 shadow-card">
                  Mekong salinity · anomaly
                </DataChip>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
