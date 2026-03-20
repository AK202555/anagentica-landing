import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Approach from './components/Approach';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Cases from './components/Cases';
import USP from './components/USP';
import TargetAudience from './components/TargetAudience';
import AboutFounder from './components/AboutFounder';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Approach />
        <Services />
        <Methodology />
        <Cases />
        <USP />
        <TargetAudience />
        <AboutFounder />
        <CTA />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
