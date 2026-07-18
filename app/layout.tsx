import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'MycoShield — Soil Functionality Restoration After Climate Extremes',
  description:
    'MycoShield deploys smart bio-materials and data-driven Arbuscular Mycorrhizal Fungi (AMF) to reverse post-disaster soil clinical infertility and safeguard global agricultural security.',
  keywords: [
    'mycorrhizal fungi',
    'soil restoration',
    'climate tech',
    'AMF',
    'carbon credits',
    'ecological restoration',
    'agricultural security',
  ],
  authors: [{ name: 'MycoShield' }],
  openGraph: {
    title: 'MycoShield — Rebuilding Living Ecosystems',
    description:
      'Data-driven bio-materials that restore soil functionality after climate extreme events.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
