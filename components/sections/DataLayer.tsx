import { Satellite, Radar, Circle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { DataChip } from '@/components/ui/DataChip';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

const scans = [
  {
    icon: Satellite,
    tag: 'Sentinel-2 · MSI',
    title: 'Optical multispectral scan',
    body: 'Thirteen light bands read near-infrared and short-wave infrared off the canopy. When the fungi that govern a plant’s water and chlorophyll fail, they leave a stress signature the eye cannot see but the sensor can.',
    accent: 'signal' as const,
  },
  {
    icon: Radar,
    tag: 'Sentinel-1 · SAR',
    title: 'Radar structure scan',
    body: 'Radar sees straight through storm cloud, measuring the ground’s moisture and roughness. Soil that has lost its fungal threads compacts, and that compaction bends the echo returning to orbit.',
    accent: 'botanical' as const,
  },
];

const readouts = [
  { k: 'Fungal network density', v: '38%', sub: 'below baseline', tone: 'text-alert' },
  { k: 'Glomalin carbon flux', v: '+1.24 t/ha', sub: 'sequestered YTD', tone: 'text-botanical' },
  { k: 'Priority restoration zones', v: '12', sub: 'flagged this week', tone: 'text-amber-deep' },
];

// Positions are percentages within the Vietnam map image (309 × 647), so each
// pin lands on its real region. `side` flips the label to keep it on the map.
const riskZones = [
  { top: '13%', left: '48%', tone: 'bg-botanical', label: 'Red River', side: 'right' as const },
  { top: '62%', left: '60%', tone: 'bg-amber-deep', label: 'Central Highlands', side: 'left' as const },
  { top: '89%', left: '37%', tone: 'bg-alert', label: 'Mekong Delta', side: 'right' as const },
];

export function DataLayer() {
  return (
    <section id="signal" className="scroll-mt-20 bg-offwhite py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Orbit"
          accent="signal"
          title="Two satellites read what the eye can’t"
          lede="Long before a field looks stressed, its light and its radar echo have already shifted. MycoShield fuses two public constellations to catch that first signal."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {scans.map((s, i) => (
            <Reveal key={s.tag} delay={i * 0.07}>
              <Card className="h-full p-6">
                <div className="flex items-center justify-between">
                  <span
                    className={
                      s.accent === 'signal'
                        ? 'flex h-11 w-11 items-center justify-center rounded-xl bg-signal-soft'
                        : 'flex h-11 w-11 items-center justify-center rounded-xl bg-botanical-soft/60'
                    }
                  >
                    <s.icon
                      className={s.accent === 'signal' ? 'h-5 w-5 text-signal-deep' : 'h-5 w-5 text-botanical'}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Layer 02 · Fusion */}
        <div id="dashboard" className="mt-20 scroll-mt-24">
          <SectionHeading
            eyebrow="Fusion"
            accent="green"
            title="Vietnam, mapped from sky, radar and soil"
            lede="A self-supervised model cross-references optical scans and radar structure against soil biology, turning indirect surface readings into a live, nationwide map of what is happening below the field."
          />

          <Reveal className="mt-12">
            <Card className="overflow-hidden p-0">
              {/* browser chrome */}
              <div className="flex items-center gap-2 border-b border-hairline bg-offwhite px-4 py-3">
                <span className="flex gap-1.5">
                  <Circle className="h-2.5 w-2.5 fill-hairline text-hairline" aria-hidden />
                  <Circle className="h-2.5 w-2.5 fill-hairline text-hairline" aria-hidden />
                  <Circle className="h-2.5 w-2.5 fill-hairline text-hairline" aria-hidden />
                </span>
                <span className="ml-2 font-mono text-[11px] text-ink-muted">
                  app.mycoshield.io / vietnam / soil-risk
                </span>
                <DataChip live className="ml-auto hidden sm:inline-flex">
                  Live
                </DataChip>
              </div>

              <div className="grid gap-0 sm:grid-cols-[1.3fr_1fr]">
                {/* stylized satellite risk map */}
                <div className="relative min-h-[380px] overflow-hidden border-b border-hairline bg-ink p-5 sm:border-b-0 sm:border-r">
                  <div className="absolute inset-0 bg-grid-fine opacity-20" aria-hidden />
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-signal/30 to-transparent animate-scan"
                    aria-hidden
                  />
                  <div className="relative z-10 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    Vietnam satellite view · live soil risk
                  </div>

                  {/* Real Vietnam province map with pins on their true regions */}
                  <div className="absolute inset-0 flex items-center justify-center px-6 pt-10 pb-5">
                    <div className="relative h-full aspect-[309/647]">
                      <div
                        className="absolute inset-0 scale-125 rounded-full bg-signal/15 blur-2xl"
                        aria-hidden
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset('/images/vietnam-map.png')}
                        alt="Map of Vietnam highlighting live soil risk zones"
                        className="absolute inset-0 h-full w-full object-contain opacity-90"
                      />

                      {riskZones.map((z) => (
                        <div
                          key={z.label}
                          className="absolute -translate-x-1/2 -translate-y-1/2"
                          style={{ top: z.top, left: z.left }}
                        >
                          <span className="relative flex h-2.5 w-2.5">
                            <span
                              className={`absolute inline-flex h-full w-full animate-ping rounded-full ${z.tone} opacity-60`}
                            />
                            <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${z.tone}`} />
                          </span>
                          <span
                            className={cn(
                              'absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-wider text-white/80',
                              z.side === 'left' ? 'right-full mr-2 text-right' : 'left-full ml-2',
                            )}
                          >
                            {z.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* readout panel */}
                <div className="space-y-4 p-5">
                  {readouts.map((r) => (
                    <div key={r.k} className="border-b border-hairline pb-3 last:border-0 last:pb-0">
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                        {r.k}
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className={`font-serif text-2xl font-semibold tracking-tight ${r.tone}`}>
                          {r.v}
                        </span>
                        <span className="text-xs text-ink-muted">{r.sub}</span>
                      </div>
                    </div>
                  ))}
                  <Badge tone="neutral">NDVI · SAR · Soil biology</Badge>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
