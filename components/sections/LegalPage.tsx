import { ArrowLeft } from 'lucide-react';
import { Nav } from '@/components/sections/Nav';
import { Footer } from '@/components/sections/Footer';
import { Container } from '@/components/ui/Container';
import { asset } from '@/lib/asset';

export type LegalSection = { heading: string; body: string };

/**
 * Shared shell for the Privacy / Terms stub pages — present for legal
 * compliance and footer completeness. Content is placeholder boilerplate.
 */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-24 sm:pt-32">
        <Container className="max-w-3xl">
          <a
            href={asset('/')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
            Back to home
          </a>

          <h1 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight text-ink">
            {title}
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            Last updated · {updated}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-body">{intro}</p>

          <div className="mt-10 space-y-8">
            {sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-bold text-ink">{s.heading}</h2>
                <p className="mt-3 leading-relaxed text-ink-muted">{s.body}</p>
              </section>
            ))}
          </div>

          <p className="mt-12 rounded-2xl border border-hairline bg-offwhite p-5 text-sm leading-relaxed text-ink-muted">
            This is placeholder legal copy for demonstration. Replace it with counsel-reviewed
            language before production use.
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
