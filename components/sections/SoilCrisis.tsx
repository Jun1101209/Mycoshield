import { CloudLightning, Network, TrendingDown, Ban, Microscope } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

type Step = {
  icon: LucideIcon;
  stage: string;
  title: string;
  body: string;
  danger?: boolean;
};

const steps: Step[] = [
  {
    icon: CloudLightning,
    stage: 'Trigger',
    title: 'Extreme weather',
    body: 'Floods, droughts and salinity disrupt soil biology.',
  },
  {
    icon: Network,
    stage: 'Collapse',
    title: 'AMF loss',
    body: 'Beneficial fungi decline, reducing water and nutrient uptake.',
    danger: true,
  },
  {
    icon: TrendingDown,
    stage: 'Symptom',
    title: 'Lower productivity',
    body: 'Fertilizers become less effective as soil health deteriorates.',
    danger: true,
  },
  {
    icon: Ban,
    stage: 'Outcome',
    title: 'Difficult recovery',
    body: 'Without restoring soil biology, replanting alone is often not enough.',
    danger: true,
  },
];

export function SoilCrisis() {
  return (
    <section id="crisis" className="scroll-mt-20 bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="The Challenge"
          accent="ochre"
          title="Healthy crops don’t always mean healthy soil."
          lede="Extreme weather weakens the biological systems that support root growth and nutrient uptake. By the time crops show visible symptoms, recovery is often slower and more expensive."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Vertical cascade — the collapse moving downward */}
          <ol className="relative ml-1.5">
            <span
              className="absolute left-[7px] top-2 bottom-6 w-px bg-hairline"
              aria-hidden
            />
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.07} className="relative pb-9 pl-10 last:pb-0">
                <span
                  className={cn(
                    'absolute left-0 top-1 h-3.5 w-3.5 rounded-full ring-4 ring-surface',
                    s.danger ? 'bg-alert' : 'bg-ink-muted',
                  )}
                  aria-hidden
                />
                <div className="flex items-center gap-2">
                  <s.icon
                    className={cn('h-4 w-4', s.danger ? 'text-alert' : 'text-ink-muted')}
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span
                    className={cn(
                      'font-mono text-[11px] uppercase tracking-[0.16em]',
                      s.danger ? 'text-alert' : 'text-ink-muted',
                    )}
                  >
                    {s.stage}
                  </span>
                </div>
                <h3 className="mt-1.5 text-lg font-bold leading-snug text-ink">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </Reveal>
            ))}
          </ol>

          {/* Emphasised aside — the reason it can't be fixed the easy way */}
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-botanical/20 bg-botanical-soft/40 p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface shadow-card">
                <Microscope className="h-5 w-5 text-botanical" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-botanical">
                Why AMF?
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-body">
                AMF only grow with living roots, which makes large-scale restoration difficult.
                Myco-Pellet delivers native AMF directly into the root zone, where colonization
                begins naturally.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
