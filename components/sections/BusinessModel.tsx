import {
  Building2,
  Leaf,
  Handshake,
  ArrowDown,
  ArrowRight,
  HeartHandshake,
  ScanLine,
  Package,
  LineChart,
  Sprout,
  LayoutDashboard,
  Landmark,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ImageSlot } from '@/components/ui/ImageSlot';
import { AskFarmerAn } from '@/components/ui/AskFarmerAn';

const audiences = [
  {
    icon: Building2,
    title: 'Agribusiness',
    body: 'Monitor farming zones, reduce fertilizer waste, and improve soil management across operations.',
  },
  {
    icon: Landmark,
    title: 'Governments & NGOs',
    body: 'Support disaster response, restoration planning, and climate resilience at a regional scale.',
  },
];

const perks = [
  { icon: LayoutDashboard, label: 'Live risk dashboard' },
  { icon: LineChart, label: 'Carbon reporting' },
  { icon: Sprout, label: 'Priority relief supply' },
];

const engine = [
  { icon: Building2, label: 'Enterprise SaaS' },
  { icon: Leaf, label: 'B2B carbon markets' },
  { icon: Handshake, label: 'Specialized consulting' },
];

const impact = [
  { icon: Package, label: 'High-volume Myco-Pellets' },
  { icon: ScanLine, label: 'Diagnostic mobile scanners' },
];

export function BusinessModel() {
  return (
    <section id="organizations" className="scroll-mt-20 bg-offwhite py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Enterprise Solutions"
          accent="green"
          title="Built for agriculture at every scale."
          lede="From single farms to national recovery programs, organizations run the same system, dashboards, bulk relief and carbon markets, in one connected loop."
        />

        {/* Who it is for */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.07}>
              <Card className="h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-botanical-soft/60">
                  <a.icon className="h-6 w-6 text-botanical" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{a.body}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Prominent subscription banner */}
        <Reveal className="mt-10">
          <div
            id="subscription"
            className="relative scroll-mt-24 overflow-hidden rounded-3xl border border-hairline bg-ink px-6 py-12 sm:px-10 sm:py-14"
          >
            <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden>
              <ImageSlot
                src="/images/rice-terraces.jpg"
                alt=""
                ratio="21 / 9"
                rounded="rounded-none"
                className="h-full w-full"
                gradient="from-botanical/40 via-botanical-deep/30 to-ink"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45"
              aria-hidden
            />

            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" aria-hidden />
                  Enterprise subscription
                </div>
                <h3 className="mt-4 max-w-xl font-serif text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-tight text-white">
                  Subscribe to live soil-risk intelligence
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70">
                  Agribusinesses and insurers get a live regional dashboard, verifiable carbon
                  reporting and priority relief supply.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {perks.map((p) => (
                    <span
                      key={p.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90"
                    >
                      <p.icon className="h-3.5 w-3.5 text-signal" strokeWidth={2} aria-hidden />
                      {p.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:justify-self-end">
                <Button as="a" href="#contact">
                  Request access
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Cross-subsidy loop: premium revenue funds free restoration */}
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          <Reveal>
            <Card className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber-deep">
                  The engine · premium revenue
                </div>
                <Badge tone="amber">Commercial</Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {engine.map((e) => (
                  <div
                    key={e.label}
                    className="flex items-center gap-3 rounded-xl border border-hairline bg-offwhite px-4 py-3"
                  >
                    <e.icon className="h-5 w-5 shrink-0 text-amber-deep" strokeWidth={1.75} aria-hidden />
                    <span className="text-sm font-semibold text-ink">{e.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-col items-center gap-1 py-1 text-ink-muted">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em]">directly funds</span>
              <ArrowDown className="h-5 w-5 text-botanical" strokeWidth={2.25} aria-hidden />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="border-botanical/25 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-botanical">
                  The impact · $0 to farmers
                </div>
                <Badge tone="botanical">
                  <HeartHandshake className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  Social impact
                </Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {impact.map((e) => (
                  <div
                    key={e.label}
                    className="flex items-center gap-3 rounded-xl border border-botanical/20 bg-botanical-soft/40 px-4 py-3"
                  >
                    <e.icon className="h-5 w-5 shrink-0 text-botanical" strokeWidth={1.75} aria-hidden />
                    <span className="text-sm font-semibold text-ink">{e.label}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex justify-center pt-2">
              <AskFarmerAn />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
