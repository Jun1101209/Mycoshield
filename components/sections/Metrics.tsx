import { Droplets, Sprout, Timer, FlaskConical } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { MetricCounter } from '@/components/ui/MetricCounter';
import { Reveal } from '@/components/ui/Reveal';

type Metric = {
  value: string;
  label: string;
  icon: LucideIcon;
};

const metrics: Metric[] = [
  { value: '45–62%', label: 'Higher salinity and drought tolerance', icon: Droplets },
  { value: '97%', label: 'Seedling survival and root attachment', icon: Sprout },
  { value: '3×', label: 'Faster soil recovery, 18 months to under 6', icon: Timer },
  { value: '35–50%', label: 'Better phosphorus and micronutrient uptake', icon: FlaskConical },
];

export function Metrics() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" aria-hidden />
            Proven in the field
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.06}>
              <div className="border-l border-white/15 pl-5">
                <metric.icon className="h-5 w-5 text-signal" strokeWidth={1.75} aria-hidden />
                <div className="mt-4 font-serif text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-none tracking-tight text-white">
                  <MetricCounter value={metric.value} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
