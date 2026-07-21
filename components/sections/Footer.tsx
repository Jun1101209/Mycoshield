import { MapPin, Mail, Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { asset } from '@/lib/asset';

// Section links are anchored to home ("/#id") so they also work from the
// legal pages; asset() adds the deploy base path at render time.
const groups = [
  {
    title: 'Platform',
    links: [
      { label: 'Technology', href: '/#signal' },
      { label: 'Dashboard', href: '/#dashboard' },
      { label: 'Myco-Pellet', href: '/#pellet' },
      { label: 'For Organizations', href: '/#organizations' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact', href: '/#contact' },
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink text-white/70">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1.6fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="h-2.5 w-2.5 rounded-full bg-signal shadow-[0_0_10px_rgba(155,203,91,0.9)]"
                aria-hidden
              />
              <span className="font-serif text-lg font-semibold tracking-tight text-white">
                MycoShield
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Satellite, radar and soil biology, fused into one signal, so relief reaches
              the ground before the harvest fails.
            </p>

            <div className="mt-6 flex items-center gap-1.5 text-sm text-white/70">
              <MapPin className="h-4 w-4 text-signal" strokeWidth={2} aria-hidden />
              Mekong Delta, Vietnam
            </div>
          </div>

          {/* Links + team */}
          <div className="grid gap-8 sm:grid-cols-[1fr_1fr_1.2fr]">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={asset(link.href)}
                        className="text-sm text-white/70 transition-colors hover:text-signal"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                Made by Habisbabi
              </h3>
              <div className="mt-4 space-y-3">
                <a
                  href="mailto:habisbabi.contactforwork@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-signal"
                >
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  habisbabi.contactforwork@gmail.com
                </a>
                <a
                  href="tel:+61408373875"
                  className="flex items-center gap-2 font-mono text-sm text-white/70 transition-colors hover:text-signal"
                >
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  +61 408 373 875
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} MycoShield. Made by Habisbabi Team.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
            Underground recovery intelligence
          </p>
        </div>
      </Container>
    </footer>
  );
}
