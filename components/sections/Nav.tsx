'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

// Home-anchored ("/#id") + base-path aware so the nav works from any route.
const links = [
  { href: '/#technology', label: 'Technology' },
  { href: '/#pellet', label: 'Myco-Pellet' },
  { href: '/#platform', label: 'Platform' },
  { href: '/#model', label: 'Impact Model' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled
          ? 'border-hairline bg-surface/80 backdrop-blur-md'
          : 'border-transparent bg-surface/0',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href={asset('/')} className="flex items-center gap-2.5" aria-label="MycoShield home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink">
            <Hexagon className="h-4 w-4 text-amber" strokeWidth={2.25} aria-hidden />
          </span>
          <span className="text-[15px] font-extrabold tracking-tight text-ink">
            MycoShield
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={asset(link.href)}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="a" href={asset('/#contact')} className="px-5">
            Request Demo
          </Button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-hairline bg-surface md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={asset(link.href)}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-ink-body hover:bg-mist"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href={asset('/#contact')}
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Request Demo
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
