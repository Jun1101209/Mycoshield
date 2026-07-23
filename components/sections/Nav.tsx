'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

// Home-anchored ("/#id") + base-path aware so the nav works from any route.
const links = [
  { href: '/#signal', label: 'AI Intelligence' },
  { href: '/#dashboard', label: 'Dashboard' },
  { href: '/#pellet', label: 'Myco-Pellet' },
  { href: '/#organizations', label: 'Enterprise' },
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
          ? 'border-hairline bg-offwhite/85 backdrop-blur-md'
          : 'border-transparent bg-offwhite/0',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href={asset('/')} className="flex items-center gap-2.5" aria-label="MycoShield home">
          <span
            className="h-2.5 w-2.5 rounded-full bg-signal shadow-[0_0_10px_rgba(155,203,91,0.9)] animate-pulse-dot"
            aria-hidden
          />
          <span className="font-serif text-[17px] font-semibold tracking-tight text-ink">
            MycoShield
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={asset(link.href)}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-botanical"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button as="a" href={asset('/#contact')} className="px-5">
            Contact
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
        <div className="border-t border-hairline bg-offwhite md:hidden">
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
              Contact
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
