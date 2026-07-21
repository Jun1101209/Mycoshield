import type { Metadata } from 'next';
import { LegalPage } from '@/components/sections/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy · MycoShield',
  description: 'How MycoShield collects, uses, and protects data across its platform.',
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 2026"
      intro="MycoShield is committed to protecting the privacy of the enterprises, cooperatives, and partners who use our soil-intelligence platform. This policy explains what we collect and how we use it."
      sections={[
        {
          heading: 'Information we collect',
          body: 'We collect account details, organization information, and the geospatial or soil-sample data you submit for analysis. Satellite telemetry we process is drawn from public constellations and our own ground-truthing network.',
        },
        {
          heading: 'How we use data',
          body: 'Submitted data is used to generate soil-risk analytics, restoration protocols, and carbon-monitoring reports. Aggregated, de-identified insights may inform our fungal biodiversity models.',
        },
        {
          heading: 'Data sharing',
          body: 'We do not sell personal data. We share information only with service providers under contract, or where required by law and applicable ESG-reporting frameworks.',
        },
        {
          heading: 'Your rights',
          body: 'You may request access, correction, or deletion of your data, and may opt out of non-essential processing. Contact privacy@mycoshield.io to exercise these rights.',
        },
      ]}
    />
  );
}
