import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { PageBioBuilder } from './components/PageBioBuilder';
import { LeadEngine } from './components/LeadEngine';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface-page text-text-primary overflow-x-hidden selection:bg-accent-primary selection:text-white">
      {/* Floating navigation pill */}
      <Navbar />

      {/* Hero section (Dark Mode) */}
      <Hero />

      {/* Social Proof (Dark Mode) */}
      <SocialProof />

      {/* Page & Bio Builder (Light Mode) */}
      <PageBioBuilder />

      {/* Lead Engine & Database (Dark Mode) */}
      <LeadEngine />

      {/* How It Works (Dark Mode) */}
      <HowItWorks />

      {/* Testimonials & Metrics (Light Mode) */}
      <Testimonials />

      {/* Pricing (Dark Mode) */}
      <Pricing />

      {/* CTA Final (Dark Mode) */}
      <CTA />

      {/* Footer (Dark Mode) */}
      <Footer />
    </div>
  );
}

export default App;
