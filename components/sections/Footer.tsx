import { Hexagon, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { asset } from '@/lib/asset';

const regions = [
  {
    name: 'MycoShield US Operations',
    lines: ['2101 Hanover Street', 'Palo Alto, CA 94304', 'United States'],
  },
  {
    name: 'MycoShield Southeast Asia Field HQ',
    lines: ['Mekong Delta Innovation Hub', 'Cần Thơ, Vietnam', 'Field & production operations'],
  },
];

// Section links are anchored to home ("/#id") so they also work from the
// legal pages; asset() adds the deploy base path at render time.
const groups = [
  {
    title: 'Solutions',
    links: [
      { label: 'Delta-Shield', href: '/#pellet' },
      { label: 'Hydro-Hydro', href: '/#pellet' },
      { label: 'Soil consulting', href: '/#platform' },
      { label: 'Carbon credits', href: '/#platform' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'Myco-Pellet anatomy', href: '/#pellet' },
      { label: 'Remote sensing', href: '/#platform' },
      { label: 'AMF science', href: '/#technology' },
      { label: 'Data platform', href: '/#platform' },
    ],
  },
  {
    title: 'ESG Framework',
    links: [
      { label: 'Impact model', href: '/#model' },
      { label: 'Smallholder program', href: '/#model' },
      { label: 'Glomalin credits', href: '/#platform' },
      { label: 'Reporting', href: '/#platform' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-offwhite">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand + regions */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink">
                <Hexagon className="h-4 w-4 text-amber" strokeWidth={2.25} aria-hidden />
              </span>
              <span className="text-[15px] font-extrabold tracking-tight text-ink">
                MycoShield
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              Underground recovery intelligence — restoring soil functionality after
              climate extreme events.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {regions.map((r) => (
                <div key={r.name}>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-ink">
                    <MapPin className="h-4 w-4 text-botanical" strokeWidth={2} aria-hidden />
                    {r.name}
                  </div>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-ink-muted">
                    {r.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={asset(link.href)}
                        className="text-sm text-ink-body transition-colors hover:text-amber-deep"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} MycoShield, Inc. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
            Rebuilding living ecosystems · Palo Alto · Mekong Delta
          </p>
        </div>
      </Container>
    </footer>
  );
}
