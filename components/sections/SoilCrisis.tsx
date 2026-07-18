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
    title: 'Extreme weather disasters',
    body: 'Floods, storms, and salt intrusion physically shear the soil profile in days.',
    tone: 'neutral' as const,
  },
  {
    icon: Network,
    step: 'Collapse',
    title: 'Up to 85% of AMF networks destroyed',
    body: 'The underground mycorrhizal web that governs water and nutrient flow is severed.',
    tone: 'alert' as const,
  },
  {
    icon: HeartCrack,
    step: 'Symptom',
    title: 'Clinical soil infertility',
    body: 'Surface looks intact while the biological engine below has gone silent.',
    tone: 'alert' as const,
  },
  {
    icon: Ban,
    step: 'Outcome',
    title: 'Total resowing failure',
    body: 'Replanted crops cannot re-establish symbiosis — yields fail repeatedly.',
    tone: 'alert' as const,
  },
];

export function SoilCrisis() {
  return (
    <section id="technology" className="scroll-mt-20 bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The invisible crisis"
          title="An ecological disaster that surface metrics never see"
          lede="Long before a field looks stressed, the living network beneath it has already broken. The damage cascades underground — silently."
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
                AMF are <strong className="font-semibold text-ink">obligate biotrophs</strong> —
                they cannot complete their life cycle without direct symbiosis with a living
                root. That single constraint makes them impossible to mass-produce through
                conventional industrial fermentation, creating an insurmountable market gap
                that MycoShield's living-carrier bio-materials are engineered to close.
              </p>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
