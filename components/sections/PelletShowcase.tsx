'use client';

import { useState } from 'react';
import {
  Shield,
  Droplets,
  Waves,
  Sun,
  FlaskRound,
  Sprout,
  Thermometer,
  Beaker,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tabs } from '@/components/ui/Tabs';
import { Toggle } from '@/components/ui/Toggle';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/cn';

export function PelletShowcase() {
  return (
    <section id="pellet" className="scroll-mt-20 bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Hardware · Circular economy"
          accent="ochre"
          title="Sugarcane shell. Coconut core. Living spores."
          lede="The moment the dashboard flags a red zone, the fix is already biodegradable, built from farm waste that would otherwise be burned."
        />

        <div className="mt-12">
          <Tabs
            items={[
              { id: 'anatomy', label: 'Anatomy of a Pellet', content: <Anatomy /> },
              { id: 'targeted', label: 'Targeted Solutions', content: <ProductMatrix /> },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- Tab A ------------------------------- */

const layers = [
  {
    icon: Shield,
    tag: 'Outer shell',
    material: 'Bagasse shell',
    body: 'Compressed sugarcane fiber shields the pellet through shipping and burial, then releases simple carbon to wake the fungi.',
    color: '#8A5A32',
  },
  {
    icon: Droplets,
    tag: 'Inner core',
    material: 'Coconut coir core',
    body: 'A porous micro-refuge holds water and a hospitable pH while the spores germinate in the soil.',
    color: '#C6902F',
  },
  {
    icon: Sprout,
    tag: 'Payload',
    material: 'Native-strain AM spores',
    body: 'Fungal spores matched to the region’s own soil chemistry, ready to re-thread the underground network on contact with moisture.',
    color: '#1F6B43',
  },
];

function Anatomy() {
  return (
    <div className="grid w-full items-center gap-8 lg:grid-cols-2">
      <PelletVisual />

      <div className="space-y-4">
        {layers.map((layer) => (
          <Card key={layer.material} className="p-5">
            <div className="flex items-start gap-4">
              <span
                className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ background: `${layer.color}1a` }}
              >
                <layer.icon className="h-5 w-5" style={{ color: layer.color }} strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  {layer.tag}
                </div>
                <h3 className="mt-1 text-lg font-bold text-ink">{layer.material}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{layer.body}</p>
              </div>
            </div>
          </Card>
        ))}
        <div className="flex flex-wrap items-center gap-2 pl-1">
          <Badge tone="botanical">Circular economy</Badge>
          <Badge tone="neutral">100% agri-waste derived</Badge>
        </div>
      </div>
    </div>
  );
}

/**
 * Lightweight, self-contained pellet cross-section. Pure CSS transforms (a slow
 * sheen sweep + gently drifting spores) with no scroll listeners, no video and
 * no rAF seek loop, so it stays smooth on any device. All motion is paused by
 * the global prefers-reduced-motion rule.
 */
function PelletVisual() {
  return (
    <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-hairline bg-offwhite shadow-card">
      <div className="absolute inset-0 bg-grid-fine opacity-40" aria-hidden />

      <div className="pointer-events-none absolute left-4 top-4 z-10 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
        Myco-Pellet · cross-section
      </div>

      {/* concentric shell -> core */}
      <div className="relative flex h-[64%] w-[64%] items-center justify-center rounded-full bg-[#8A5A32]/15 ring-1 ring-[#8A5A32]/40">
        {/* slow rotating scan sheen */}
        <div
          className="absolute inset-0 rounded-full animate-spin-slow"
          style={{
            background:
              'conic-gradient(from 0deg, rgba(155,203,91,0.35), transparent 28%, transparent 72%, rgba(155,203,91,0.2))',
            maskImage: 'radial-gradient(circle, transparent 58%, #000 60%)',
            WebkitMaskImage: 'radial-gradient(circle, transparent 58%, #000 60%)',
          }}
          aria-hidden
        />
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#8A5A32]/30 bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#8A5A32]">
          Bagasse shell
        </span>

        <div className="relative flex h-[64%] w-[64%] items-center justify-center rounded-full bg-amber-soft ring-1 ring-amber-deep/40">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-amber-deep/30 bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-deep">
            Coir core
          </span>

          <div className="relative flex h-[58%] w-[58%] flex-col items-center justify-center gap-1 rounded-full bg-ink text-center">
            {/* drifting spores */}
            <span className="absolute left-[30%] top-[34%] h-1.5 w-1.5 rounded-full bg-signal animate-spore-drift" aria-hidden />
            <span
              className="absolute left-[62%] top-[52%] h-1.5 w-1.5 rounded-full bg-signal animate-spore-drift"
              style={{ animationDelay: '1.2s' }}
              aria-hidden
            />
            <span
              className="absolute left-[46%] top-[64%] h-1 w-1 rounded-full bg-signal animate-spore-drift"
              style={{ animationDelay: '2.4s' }}
              aria-hidden
            />
            <Sprout className="relative h-6 w-6 text-signal" strokeWidth={2} aria-hidden />
            <span className="relative px-2 font-mono text-[9px] uppercase leading-tight tracking-wider text-white/80">
              Living AM spores
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Tab B ------------------------------- */

type Product = {
  id: string;
  name: string;
  region: string;
  target: string;
  accent: 'botanical' | 'amber';
  icon: typeof Waves;
  strains: { name: string; role: string }[];
  additives: { icon: typeof FlaskRound; text: string }[];
};

const products: Product[] = [
  {
    id: 'delta',
    name: 'Delta-Shield',
    region: 'Mekong River Delta',
    target: 'Heavily salinated soils',
    accent: 'botanical',
    icon: Waves,
    strains: [
      { name: 'Claroideoglomus etunicatum', role: 'Halotolerant ionic filter' },
      { name: 'Funneliformis geosporum', role: 'Blocks toxic Na and Cl, pumps K' },
    ],
    additives: [
      { icon: FlaskRound, text: 'Gypsum displaces sodium locked in the soil' },
      { icon: Beaker, text: 'Slow-dissolving alginate coating' },
    ],
  },
  {
    id: 'hydro',
    name: 'Arid-Guard',
    region: 'Central Highlands',
    target: 'Arid and drought-stricken regions',
    accent: 'amber',
    icon: Sun,
    strains: [
      { name: 'Rhizophagus irregularis', role: 'Aggressive hyphal network builder' },
      { name: 'Funneliformis mosseae', role: 'Crawls into micro soil pores' },
    ],
    additives: [
      { icon: Droplets, text: 'Cornstarch hydrogel holds 300× its weight in water' },
      { icon: Thermometer, text: 'Humic acids for early root vigor' },
    ],
  },
];

function ProductMatrix() {
  const [active, setActive] = useState(products[0].id);
  const product = products.find((p) => p.id === active) ?? products[0];
  const isAmber = product.accent === 'amber';

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="space-y-5">
        <Toggle
          ariaLabel="Choose a Myco-Pellet model"
          value={active}
          onChange={setActive}
          options={products.map((p) => ({
            id: p.id,
            label: p.name,
            sublabel: p.region,
          }))}
        />
        <Card className="overflow-hidden p-0">
          <div
            className={cn(
              'flex items-center gap-4 px-6 py-5',
              isAmber ? 'bg-amber-soft/60' : 'bg-botanical-soft/50',
            )}
          >
            <span
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-xl',
                isAmber ? 'bg-amber-deep' : 'bg-botanical',
              )}
            >
              <product.icon className="h-6 w-6 text-white" strokeWidth={1.75} aria-hidden />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-ink">{product.name}</h3>
              <p className="text-sm text-ink-muted">{product.target}</p>
            </div>
          </div>
          <div className="px-6 py-5">
            <Badge tone={product.accent}>Deployment zone · {product.region}</Badge>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-5">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
            <Sprout className="h-4 w-4 text-botanical" strokeWidth={2} aria-hidden />
            Fungal strains
          </div>
          <ul className="mt-4 space-y-4">
            {product.strains.map((s) => (
              <li key={s.name}>
                <div className="text-sm font-bold italic text-ink">{s.name}</div>
                <div className="mt-0.5 text-xs text-ink-muted">{s.role}</div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
            <FlaskRound className="h-4 w-4 text-amber-deep" strokeWidth={2} aria-hidden />
            Engineered additives
          </div>
          <ul className="mt-4 space-y-4">
            {product.additives.map((a) => (
              <li key={a.text} className="flex items-start gap-3">
                <a.icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.75} aria-hidden />
                <span className="text-sm leading-relaxed text-ink-body">{a.text}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
