import { Satellite, Radar, Circle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { DataChip } from '@/components/ui/DataChip';
import { Reveal } from '@/components/ui/Reveal';
import { asset } from '@/lib/asset';

const scans = [
  {
    icon: Satellite,
    tag: 'Sentinel-2 · MSI',
    title: 'Optical multispectral scan',
    body: 'Thirteen light bands read the canopy. Failing fungi leave a stress signature the eye cannot see but the sensor can.',
    accent: 'signal' as const,
  },
  {
    icon: Radar,
    tag: 'Sentinel-1 · SAR',
    title: 'Radar structure scan',
    body: 'Radar sees through storm cloud. Soil that has lost its fungal threads compacts, and that bends the echo back to orbit.',
    accent: 'botanical' as const,
  },
];

const readouts = [
  { k: 'Fungal network density', v: '38%', sub: 'below baseline', tone: 'text-alert' },
  { k: 'Glomalin carbon flux', v: '+1.24 t/ha', sub: 'sequestered YTD', tone: 'text-botanical' },
  { k: 'Priority restoration zones', v: '12', sub: 'flagged this week', tone: 'text-amber-deep' },
];

// Coordinates are percentages of the 16:10 map stage (see the panel below), so
// the dot sits on its real region and a leader line reaches a label on the
// right. `dot` = pin, `line` = where the connector ends, `lab` = label anchor.
type Pin = {
  label: string;
  color: string;
  dot: [number, number];
  line: [number, number];
  lab: [number, number];
};

const pins: Pin[] = [
  { label: 'Northern farms', color: '#C6902F', dot: [15.9, 16.7], line: [40, 13], lab: [41, 13] },
  { label: 'Central coast', color: '#C6902F', dot: [18.1, 42.8], line: [44, 39], lab: [45, 39] },
  { label: 'Mekong Delta', color: '#C25A44', dot: [14.3, 82.4], line: [38, 78], lab: [39, 78] },
];

const legend = [
  { color: '#5F9142', label: 'Healthy AM network' },
  { color: '#C6902F', label: 'Ecological stress · salinity' },
  { color: '#C25A44', label: 'Total fungal collapse' },
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

              {/* Satellite risk map panel (light) */}
              <div className="relative border-b border-hairline bg-[#EEF2E8] px-5 py-6 sm:px-7">
                <div className="inline-flex items-center gap-2 rounded-md border border-hairline bg-surface/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                  Vietnam satellite view · live soil risk
                </div>

                {/* Fixed 16:10 stage keeps the dots, leader lines and labels aligned */}
                <div className="relative mx-auto mt-5 aspect-[16/10] w-full max-w-[620px]">
                  {/* leader lines */}
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden
                  >
                    {pins.map((p) => (
                      <g key={p.label}>
                        <line
                          x1={p.dot[0]}
                          y1={p.dot[1]}
                          x2={p.line[0]}
                          y2={p.line[1]}
                          stroke="rgba(19,36,28,0.35)"
                          strokeWidth="0.35"
                        />
                        <circle cx={p.line[0]} cy={p.line[1]} r="0.7" fill={p.color} />
                      </g>
                    ))}
                  </svg>

                  {/* Vietnam province map, recoloured to the botanical palette */}
                  <div className="absolute left-[3%] top-[5%] h-[90%] w-[26.9%]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset('/images/vietnam-map-green.png')}
                      alt="Map of Vietnam highlighting live soil risk zones"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* pins */}
                  {pins.map((p) => (
                    <span
                      key={p.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${p.dot[0]}%`, top: `${p.dot[1]}%` }}
                    >
                      <span
                        className="flex h-4 w-4 items-center justify-center rounded-full"
                        style={{ backgroundColor: `${p.color}33` }}
                      >
                        <span
                          className="h-2 w-2 rounded-full ring-2 ring-[#EEF2E8]"
                          style={{ backgroundColor: p.color }}
                        />
                      </span>
                    </span>
                  ))}

                  {/* labels */}
                  {pins.map((p) => (
                    <span
                      key={p.label}
                      className="absolute -translate-y-1/2 whitespace-nowrap font-mono text-[10px] tracking-wide text-ink-body"
                      style={{ left: `${p.lab[0]}%`, top: `${p.lab[1]}%` }}
                    >
                      {p.label}
                    </span>
                  ))}

                  {/* corner pills */}
                  <span className="absolute bottom-0 left-0 inline-flex items-center rounded-md border border-hairline bg-surface/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-muted">
                    NDVI · SAR · Soil biology
                  </span>
                  <span className="absolute bottom-0 right-0 inline-flex items-center rounded-md border border-alert/30 bg-alert-soft/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-alert">
                    Mekong Delta priority zone
                  </span>
                </div>

                {/* legend */}
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline/70 pt-4">
                  {legend.map((l) => (
                    <span
                      key={l.label}
                      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-ink-muted"
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-[3px]"
                        style={{ backgroundColor: l.color }}
                      />
                      {l.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* readouts row */}
              <div className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {readouts.map((r) => (
                  <div key={r.k} className="px-5 py-4">
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
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
