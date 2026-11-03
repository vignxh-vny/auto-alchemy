import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Process from '@/components/Process';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Services />
        <BeforeAfterSlider />
        <Process />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

