import { Satellite, LineChart, Microscope, Circle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { DataChip } from '@/components/ui/DataChip';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

const pillars = [
  {
    icon: Satellite,
    title: 'Remote sensing fungal tracking',
    body: 'AI deep-learning models analyze satellite telemetry to track underground biodiversity density from space, aligned to the global registry framework (arXiv:2604.09818v1).',
  },
  {
    icon: LineChart,
    title: 'Voluntary carbon market integration',
    body: 'Quantitative monitoring of Glomalin — a highly stable glycoprotein carbon sink — to generate premium, verifiable soil carbon credits.',
  },
  {
    icon: Microscope,
    title: 'Premium soil consulting',
    body: 'Elite laboratory analysis and site-specific restoration protocols that help agricultural enterprises hit their ESG metrics with ground-truthed data.',
  },
];

const riskZones = [
  { top: '24%', left: '46%', tone: 'bg-amber-deep', label: 'Central Highlands' },
  { top: '70%', left: '38%', tone: 'bg-red-500', label: 'Mekong Delta' },
  { top: '15%', left: '58%', tone: 'bg-botanical', label: 'Red River' },
];

export function DataLayer() {
  return (
    <section id="platform" className="scroll-mt-20 bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Enterprise data layer"
          title="A soil-intelligence platform, from orbit to root zone"
          lede="MycoShield fuses satellite optical and radar data with soil biology into one commercial dashboard — the monetization engine behind the mission."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          {/* Dashboard mock */}
          <Reveal>
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
                <div className="relative min-h-[280px] overflow-hidden border-b border-hairline bg-ink p-5 sm:border-b-0 sm:border-r">
                  <div className="absolute inset-0 bg-grid-fine opacity-20" aria-hidden />
                  {/* scanline */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-botanical/30 to-transparent animate-scan"
                    aria-hidden
                  />
                  <div className="relative font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    Vietnam satellite view · live soil risk
                  </div>

                  {/* abstract landmass */}
                  <svg
                    viewBox="0 0 200 300"
                    className="absolute inset-0 mx-auto h-full w-full opacity-70"
                    aria-hidden
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M118 22 C128 46 112 74 104 96 C96 118 120 132 116 156 C112 182 86 196 78 222 C70 248 92 266 78 284 C70 292 58 286 60 272 C64 244 82 232 86 208 C90 184 70 172 76 148 C82 122 104 112 108 88 C112 64 98 44 108 26 Z"
                      fill="rgba(134,201,111,0.16)"
                      stroke="rgba(156,199,163,0.45)"
                      strokeWidth="1"
                    />
                  </svg>

                  {riskZones.map((z) => (
                    <div
                      key={z.label}
                      className="absolute flex items-center gap-1.5"
                      style={{ top: z.top, left: z.left }}
                    >
                      <span className="relative flex h-2.5 w-2.5">
                        <span
                          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${z.tone} opacity-60`}
                        />
                        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${z.tone}`} />
                      </span>
                      <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-wider text-white/70">
                        {z.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* readout panel */}
                <div className="space-y-4 p-5">
                  {[
                    { k: 'AMF network density', v: '38%', sub: 'below baseline', tone: 'text-red-600' },
                    { k: 'Glomalin carbon flux', v: '+1.24 t/ha', sub: 'sequestered YTD', tone: 'text-botanical' },
                    { k: 'Priority restoration zones', v: '12', sub: 'flagged this week', tone: 'text-amber-deep' },
                  ].map((r) => (
                    <div key={r.k} className="border-b border-hairline pb-3 last:border-0 last:pb-0">
                      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                        {r.k}
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className={`text-2xl font-extrabold tracking-tight ${r.tone}`}>
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

          {/* Pillars */}
          <div className="grid gap-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.06}>
                <Card interactive className="h-full p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-botanical-soft/50">
                      <pillar.icon className="h-5 w-5 text-botanical" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink">{pillar.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
