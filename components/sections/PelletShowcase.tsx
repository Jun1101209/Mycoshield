import { Shield, Droplets, Waves, Sun, Sprout } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { PelletModel } from '@/components/ui/PelletModel';
import { cn } from '@/lib/cn';

const layers = [
  {
    n: '01',
    icon: Shield,
    material: 'Bagasse shell',
    body: 'Made from sugarcane by-product, it protects the spores and adds organic carbon to the soil.',
    color: '#8A5A32',
  },
  {
    n: '02',
    icon: Droplets,
    material: 'Coconut coir',
    body: 'A porous core retains moisture around the root zone while the spores establish.',
    color: '#C6902F',
  },
  {
    n: '03',
    icon: Sprout,
    material: 'Native AMF',
    body: 'Region-matched spores rebuild fungal networks and improve nutrient uptake.',
    color: '#1F6B43',
  },
];

export function PelletShowcase() {
  return (
    <section id="pellet" className="scroll-mt-20 bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Myco-Pellet"
          accent="ochre"
          title="A biological solution for degraded soils."
          lede="Made from agricultural by-products, Myco-Pellet protects native AMF spores and creates favorable conditions for soil recovery."
        />

        {/* 3D model + numbered anatomy */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <PelletModel fallback={<PelletSchematic />} />
          </Reveal>

          <ol className="space-y-4">
            {layers.map((layer, i) => (
              <Reveal as="li" key={layer.material} delay={i * 0.06}>
                <Card className="p-5">
                  <div className="flex items-start gap-4">
                    <span
                      className="font-serif text-2xl font-semibold leading-none"
                      style={{ color: layer.color }}
                    >
                      {layer.n}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <layer.icon className="h-4 w-4" style={{ color: layer.color }} strokeWidth={2} aria-hidden />
                        <h3 className="text-lg font-bold text-ink">{layer.material}</h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{layer.body}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
            <div className="flex flex-wrap items-center gap-2 pl-1 pt-1">
              <Badge tone="botanical">Circular economy</Badge>
              <Badge tone="neutral">100% agri-waste derived</Badge>
            </div>
          </ol>
        </div>

        {/* Targeted solutions — shown directly, no tabs to click */}
        <div className="mt-16 border-t border-hairline pt-12">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.16em] text-amber-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-deep" aria-hidden />
              Regional formulations
            </div>
            <h3 className="mt-3 max-w-2xl text-2xl font-bold text-ink">
              Optimized for local soil conditions.
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Static cross-section schematic used when the 3D clip is unavailable or the
 * visitor prefers reduced motion. Concentric shell to core with a few spores.
 */
function PelletSchematic() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative flex h-[64%] w-[64%] items-center justify-center rounded-full bg-[#8A5A32]/15 ring-1 ring-[#8A5A32]/40">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#8A5A32]/30 bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#8A5A32]">
          Bagasse shell
        </span>
        <div className="relative flex h-[64%] w-[64%] items-center justify-center rounded-full bg-amber-soft ring-1 ring-amber-deep/40">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-amber-deep/30 bg-surface px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-deep">
            Coir core
          </span>
          <div className="relative flex h-[58%] w-[58%] flex-col items-center justify-center gap-1 rounded-full bg-ink text-center">
            <span className="absolute left-[30%] top-[34%] h-1.5 w-1.5 rounded-full bg-signal animate-spore-drift" aria-hidden />
            <span
              className="absolute left-[62%] top-[52%] h-1.5 w-1.5 rounded-full bg-signal animate-spore-drift"
              style={{ animationDelay: '1.2s' }}
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

/* ------------------------------- Products ------------------------------- */

type Product = {
  id: string;
  name: string;
  region: string;
  target: string;
  accent: 'botanical' | 'amber';
  icon: LucideIcon;
  strains: string[];
  additive: string;
};

const products: Product[] = [
  {
    id: 'delta',
    name: 'Delta Shield',
    region: 'Mekong Delta',
    target: 'Saline soils',
    accent: 'botanical',
    icon: Waves,
    strains: ['Claroideoglomus etunicatum', 'Funneliformis geosporum'],
    additive:
      'Designed for saline soils in the Mekong Delta, using salt-tolerant AMF and soil conditioners to improve nutrient uptake.',
  },
  {
    id: 'arid',
    name: 'Arid Guard',
    region: 'Drought-prone regions',
    target: 'Drought and heat',
    accent: 'amber',
    icon: Sun,
    strains: ['Rhizophagus irregularis', 'Funneliformis mosseae'],
    additive:
      'Designed for drought-prone regions, combining drought-adapted AMF with moisture-retaining materials to improve water availability.',
  },
];

function ProductCard({ product }: { product: Product }) {
  const isAmber = product.accent === 'amber';
  return (
    <Card className="h-full overflow-hidden p-0">
      <div
        className={cn(
          'flex items-center gap-4 px-6 py-5',
          isAmber ? 'bg-amber-soft/60' : 'bg-botanical-soft/50',
        )}
      >
        <span
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
            isAmber ? 'bg-amber-deep' : 'bg-botanical',
          )}
        >
          <product.icon className="h-6 w-6 text-white" strokeWidth={1.75} aria-hidden />
        </span>
        <div>
          <h4 className="text-xl font-extrabold text-ink">{product.name}</h4>
          <p className="text-sm text-ink-muted">{product.target}</p>
        </div>
      </div>

      <div className="space-y-3 px-6 py-5">
        <p className="text-sm leading-relaxed text-ink-body">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
            Strains ·{' '}
          </span>
          <span className="italic">{product.strains.join(', ')}</span>
        </p>
        <p className="text-sm leading-relaxed text-ink-body">{product.additive}</p>
        <Badge tone={product.accent}>{product.region}</Badge>
      </div>
    </Card>
  );
}
