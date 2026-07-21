import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ImageSlot } from '@/components/ui/ImageSlot';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-surface py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-hairline bg-ink px-6 py-14 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
              <ImageSlot
                src="/images/tea-hills.jpg"
                alt=""
                ratio="16 / 9"
                rounded="rounded-none"
                className="h-full w-full"
                gradient="from-botanical/50 via-botanical-deep/40 to-ink"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
              aria-hidden
            />

            <div className="relative max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-dot" aria-hidden />
                Partner with MycoShield
              </div>
              <h2 className="text-[clamp(1.9rem,4vw,2.9rem)] leading-tight text-white">
                Ready to see what is happening under your fields?
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
                Book a soil audit for your region, or request a site-specific restoration
                protocol from our team. We reply within two working days.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button as="a" href="mailto:habisbabi.contactforwork@gmail.com">
                  Email the team
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                </Button>
                <Button
                  as="a"
                  href="mailto:habisbabi.contactforwork@gmail.com"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" strokeWidth={2} aria-hidden />
                  habisbabi.contactforwork@gmail.com
                </Button>
              </div>
              <a
                href="tel:+61408373875"
                className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-white/60 transition-colors hover:text-signal"
              >
                <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
                +61 408 373 875
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
