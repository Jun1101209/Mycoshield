import { Droplets, Sprout, Timer, FlaskConical } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { MetricCounter } from '@/components/ui/MetricCounter';
import { Reveal } from '@/components/ui/Reveal';

type Metric = {
  value: string;
  label: string;
  icon: LucideIcon;
};

const metrics: Metric[] = [
  {
    value: '45–62%',
    label: 'Increase in crop salinity & drought tolerance',
    icon: Droplets,
  },
  {
    value: '97%',
    label: 'Seedling survival & successful root attachment rate',
    icon: Sprout,
  },
  {
    value: '3×',
    label: 'Faster soil biodiverse recovery — from 18 to under 6 months',
    icon: Timer,
  },
  {
    value: '35–50%',
    label: 'Enhanced phosphorus (P) & micronutrient uptake efficiency',
    icon: FlaskConical,
  },
];

export function Metrics() {
  return (
    <section className="border-y border-hairline bg-offwhite py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.06}>
              <Card className="h-full p-6">
                <metric.icon
                  className="h-6 w-6 text-amber-deep"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <div className="mt-5 text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-none tracking-tight text-ink">
                  <MetricCounter value={metric.value} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {metric.label}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
