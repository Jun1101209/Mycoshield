import {
  Building2,
  Leaf,
  Handshake,
  ArrowDown,
  HeartHandshake,
  ScanLine,
  Package,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

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
    <section id="model" className="scroll-mt-20 bg-offwhite py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cross-subsidization model"
          title="Premium revenue funds free restoration at the frontline"
          lede="One loop: profit from enterprise climate services underwrites the pellets and tools that reach smallholders at zero cost — before climate shock forces migration."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {/* Engine */}
          <Reveal>
            <Card className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-amber-deep">
                  The engine — premium revenue
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

          {/* connector */}
          <Reveal delay={0.05}>
            <div className="flex flex-col items-center gap-1 py-1 text-ink-muted">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                directly funds
              </span>
              <ArrowDown className="h-5 w-5 text-amber-deep" strokeWidth={2.25} aria-hidden />
            </div>
          </Reveal>

          {/* Impact */}
          <Reveal delay={0.1}>
            <Card className="border-botanical/25 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-botanical">
                  The impact — $0 cost basis
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
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Distributed to smallholder farming cooperatives directly impacted by
                catastrophic climate shock — preventing climate-forced migration and
                rebuilding food security where it is most fragile.
              </p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
