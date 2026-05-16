import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Approach from './components/Approach';
import Footer from './components/Footer';

const Services       = dynamic(() => import('./components/Services'));
const Methodology    = dynamic(() => import('./components/Methodology'));
const Cases          = dynamic(() => import('./components/Cases'));
const USP            = dynamic(() => import('./components/USP'));
const TargetAudience = dynamic(() => import('./components/TargetAudience'));
const AboutFounder   = dynamic(() => import('./components/AboutFounder'));
const CTA            = dynamic(() => import('./components/CTA'));
const ChatWidget     = dynamic(() => import('./components/ChatWidget'),    { ssr: false });
const CookieConsent  = dynamic(() => import('./components/CookieConsent'), { ssr: false });

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
      <ChatWidget />
      <CookieConsent />
    </>
  );
}
