'use client';

import { useState } from 'react';
import type { MotionValue } from 'framer-motion';
import { motion, useTransform, useReducedMotion } from 'framer-motion';
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
import { ScrollScrubVideo } from '@/components/ui/ScrollScrubVideo';
import { cn } from '@/lib/cn';

export function PelletShowcase() {
  return (
    <section id="pellet" className="scroll-mt-20 bg-offwhite py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Deep-tech hardware"
          title="Sugarcane shell. Coconut core. Living spores."
          lede="Each Myco-Pellet is a circular-economy micro-habitat, engineered to keep obligate fungi alive from factory to field — then release them exactly where roots need them."
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
    tag: 'Outer mechanical shell',
    material: 'Sugarcane Bagasse',
    body: 'Protects biological viability against high-impact shipping and severe soil compaction. Gradually releases simple carbon compounds to trigger fungal growth.',
  },
  {
    icon: Droplets,
    tag: 'Inner biological core',
    material: 'Coconut Coir',
    body: 'A localized micro-refuge that retains 8–10× its weight in water, buffers thermal stress, and holds an optimal pH (5.5–6.5) for spore germination.',
  },
];

function Anatomy() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      {/* Scroll-scrubbed 3D turntable of the pellet (Blender render). Until the
          video file is dropped into /public/media, the cross-section schematic
          below stands in — and it turns with the same scroll gesture, so the
          interaction is live either way. */}
      <ScrollScrubVideo
        src="/media/myco-pellet.mp4"
        poster="/media/myco-pellet-poster.jpg"
        ratio="4 / 5"
        label="Myco-Pellet · 3D turntable"
        fallback={(progress) => <PelletSchematic progress={progress} />}
      />

      {/* Layer callouts */}
      <div className="space-y-4">
        {layers.map((layer) => (
          <Card key={layer.material} className="p-5">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-mist">
                <layer.icon className="h-5 w-5 text-ink" strokeWidth={1.75} aria-hidden />
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
        <div className="flex items-center gap-2 pl-1">
          <Badge tone="botanical">Circular economy</Badge>
          <Badge tone="neutral">100% agri-waste derived</Badge>
        </div>
      </div>
    </div>
  );
}

/**
 * Cross-section schematic used as the scrub-video fallback. It swings on its Y
 * axis with the shared scroll progress, hinting at the 3D turntable that
 * replaces it once /public/media/myco-pellet.mp4 exists.
 */
function PelletSchematic({ progress }: { progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const rotateY = useTransform(progress, [0, 1], reduce ? [0, 0] : [-24, 24]);
  const scale = useTransform(progress, [0, 0.5, 1], reduce ? [1, 1, 1] : [0.95, 1.03, 0.95]);

  return (
    <div className="absolute inset-0" style={{ perspective: 900 }}>
      <div className="absolute inset-0 bg-grid-fine opacity-40" aria-hidden />

      <div className="flex h-full items-center justify-center">
        <motion.div
          style={{ rotateY, scale, transformStyle: 'preserve-3d' }}
          className="relative flex h-[64%] w-[64%] items-center justify-center rounded-full border-2 border-dashed border-amber-deep/40 bg-amber-soft/40"
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-amber-deep/30 bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-deep">
            Bagasse shell
          </span>
          <div className="relative flex h-[62%] w-[62%] items-center justify-center rounded-full border-2 border-botanical/40 bg-botanical-soft/60">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-botanical/30 bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-botanical">
              Coir core
            </span>
            <div className="flex h-[55%] w-[55%] flex-col items-center justify-center gap-1 rounded-full bg-ink text-center">
              <Sprout className="h-6 w-6 text-amber" strokeWidth={2} aria-hidden />
              <span className="px-2 font-mono text-[9px] uppercase leading-tight tracking-wider text-white/80">
                Living AMF spores
              </span>
            </div>
          </div>
        </motion.div>
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
      { name: 'Funneliformis geosporum', role: 'Blocks toxic Na⁺ / Cl⁻, pumps K⁺' },
    ],
    additives: [
      { icon: FlaskRound, text: 'Gypsum (CaSO₄) chemically displaces soil sodium' },
      { icon: Beaker, text: 'Slow-dissolving liquid alginate coating' },
    ],
  },
  {
    id: 'hydro',
    name: 'Hydro-Hydro',
    region: 'Central Highlands',
    target: 'Arid & drought-stricken regions',
    accent: 'amber',
    icon: Sun,
    strains: [
      { name: 'Rhizophagus irregularis', role: 'Aggressive hyphal network builder' },
      { name: 'Funneliformis mosseae', role: 'Crawls into micro-soil pores' },
    ],
    additives: [
      { icon: Droplets, text: 'Cornstarch superabsorbent hydrogel (300× water weight)' },
      { icon: Thermometer, text: 'Humic growth acids for root vigor' },
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
        <Card
          className={cn(
            'overflow-hidden p-0',
          )}
        >
          <div
            className={cn(
              'flex items-center gap-4 px-6 py-5',
              isAmber ? 'bg-amber-soft/50' : 'bg-botanical-soft/50',
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
