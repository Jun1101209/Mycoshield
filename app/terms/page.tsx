import type { Metadata } from 'next';
import { LegalPage } from '@/components/sections/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service — MycoShield',
  description: 'The terms governing use of the MycoShield platform and services.',
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      intro="These terms govern your access to and use of MycoShield's platform, bio-materials, and advisory services. By using our services you agree to the terms below."
      sections={[
        {
          heading: 'Use of the platform',
          body: 'MycoShield grants you a limited, non-exclusive, non-transferable license to use the platform for your internal soil-restoration and reporting purposes, subject to your subscription tier.',
        },
        {
          heading: 'Scientific data & estimates',
          body: 'Analytics, recovery timelines, and carbon estimates are model-based projections. They are provided for planning and do not constitute guarantees of agronomic or financial outcomes.',
        },
        {
          heading: 'Bio-material handling',
          body: 'Myco-Pellets contain living biological cultures. You agree to follow provided storage, deployment, and safety guidance to preserve viability and environmental compliance.',
        },
        {
          heading: 'Liability',
          body: 'To the maximum extent permitted by law, MycoShield is not liable for indirect or consequential damages arising from use of the platform or field products.',
        },
      ]}
    />
  );
}
