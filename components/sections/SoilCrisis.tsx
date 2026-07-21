import { CloudLightning, Network, HeartCrack, Ban, ArrowRight, Microscope } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FlowNode } from '@/components/ui/FlowNode';
import { Reveal } from '@/components/ui/Reveal';
import { Card } from '@/components/ui/Card';

const steps = [
  {
    icon: CloudLightning,
    step: 'Trigger',
    title: 'Extreme weather',
    body: 'Floods, storms and salt intrusion shear the soil profile in days.',
    tone: 'neutral' as const,
  },
  {
    icon: Network,
    step: 'Collapse',
    title: 'Up to 85% of fungal networks lost',
    body: 'The web that moves water and nutrients underground is severed.',
    tone: 'alert' as const,
  },
  {
    icon: HeartCrack,
    step: 'Symptom',
    title: 'Clinical soil infertility',
    body: 'The surface looks intact while the biology below goes silent.',
    tone: 'alert' as const,
  },
  {
    icon: Ban,
    step: 'Outcome',
    title: 'Resowing fails',
    body: 'Replanted crops cannot rebuild symbiosis, so yields fail again.',
    tone: 'alert' as const,
  },
];

export function SoilCrisis() {
  return (
    <section id="crisis" className="scroll-mt-20 bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The invisible crisis"
          accent="ochre"
          title="The field looks fine. The engine beneath it has gone quiet."
          lede="Long before a crop looks stressed, the living network under it has already broken. The damage runs underground, in silence."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.07} className="relative">
              <FlowNode {...step} />
              {i < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-hairline lg:block"
                  strokeWidth={2}
                  aria-hidden
                />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Card className="mt-8 overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[auto_1fr]">
              <div className="flex items-center gap-4 border-b border-hairline bg-offwhite px-6 py-5 md:border-b-0 md:border-r">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-botanical-soft/60">
                  <Microscope className="h-5 w-5 text-botanical" strokeWidth={1.75} aria-hidden />
                </span>
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-botanical">
                  The biological bottleneck
                </div>
              </div>
              <p className="px-6 py-5 text-[15px] leading-relaxed text-ink-body">
                These fungi are{' '}
                <strong className="font-semibold text-ink">obligate biotrophs</strong>. They
                cannot complete their life cycle without a living root, which makes them
                impossible to mass-produce through conventional fermentation. MycoShield&rsquo;s
                living-carrier pellets are engineered to close exactly that gap.
              </p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
