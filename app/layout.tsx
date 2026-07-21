import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Editorial serif for display headings (variable font, full weight range).
const serif = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  style: ['normal', 'italic'],
});

// Clean sans for body and UI.
const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

// Mono for telemetry labels.
const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'MycoShield · Underground Recovery Intelligence',
  description:
    'MycoShield reads the invisible collapse of soil fungal networks from orbit and from the soil itself, then ships a living, biodegradable fix to the field.',
  keywords: [
    'mycorrhizal fungi',
    'soil restoration',
    'climate tech',
    'AMF',
    'carbon credits',
    'ecological restoration',
    'agricultural security',
  ],
  authors: [{ name: 'Habisbabi' }],
  openGraph: {
    title: 'MycoShield · Underground Recovery Intelligence',
    description:
      'Satellite, radar and soil biology, fused into one signal, so relief reaches the ground before the harvest fails.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#FAFAF7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
