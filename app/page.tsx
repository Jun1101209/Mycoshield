import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { Metrics } from '@/components/sections/Metrics';
import { SoilCrisis } from '@/components/sections/SoilCrisis';
import { PelletShowcase } from '@/components/sections/PelletShowcase';
import { DataLayer } from '@/components/sections/DataLayer';
import { BusinessModel } from '@/components/sections/BusinessModel';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Metrics />
        <SoilCrisis />
        <PelletShowcase />
        <DataLayer />
        <BusinessModel />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
