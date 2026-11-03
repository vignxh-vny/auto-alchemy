import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteData } from '@/data/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'About — Paramaathma’s Auto Alchemy',
  description:
    'About Paramaathma’s Auto Alchemy: A premium auto detailing studio in Muddinapalya, Bengaluru established in 2026.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="top" className="pt-[110px] md:pt-[130px]">
        {/* Header */}
        <section className="py-12 md:py-16 border-b border-line">
          <div className="wrap">
            <h1 className="font-head text-[clamp(44px,7vw,84px)] uppercase font-bold leading-none mb-6 tracking-[0.01em]">
              About The Studio
            </h1>
            <p className="text-muted text-[18px] md:text-[20px] max-w-2xl leading-[1.6]">
              Paramaathma’s Auto Alchemy is a dedicated car and bike detailing studio located in Muddinapalya, Bengaluru.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Facts & Core Values */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="font-head text-gold text-[20px] tracking-[0.25em] uppercase mb-3">
                    Est. {siteData.established}
                  </div>
                  <h2 className="font-head text-[clamp(32px,5vw,52px)] uppercase font-semibold leading-tight tracking-[0.01em] mb-6">
                    {siteData.tagline}
                  </h2>
                  <p className="text-muted text-[16px] md:text-[17px] leading-[1.7] mb-6">
                    Auto Alchemy was founded on a simple principle: vehicles are not treated on an assembly line. Every car and bike that enters our studio is protected, enhanced, and preserved with dedicated bay time and meticulous attention to detail.
                  </p>
                  <p className="text-muted text-[16px] md:text-[17px] leading-[1.7]">
                    Located at Byregowda Layout in Annapurneshwari Nagar, Bengaluru, our workshop offers interior and exterior detailing, multi-stage paint decontamination, high-gloss ceramic coatings, advanced graphene coatings, paint protection film (PPF), and precision bike accessories.
                  </p>
                </div>

                {/* Facts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-line">
                  <div className="bg-panel border border-line p-5 rounded-[2px]">
                    <div className="text-muted text-[13px] uppercase tracking-wider mb-1">
                      Studio Location
                    </div>
                    <div className="font-head text-[22px] font-semibold text-text uppercase">
                      Muddinapalya, Bengaluru
                    </div>
                  </div>
                  <div className="bg-panel border border-line p-5 rounded-[2px]">
                    <div className="text-muted text-[13px] uppercase tracking-wider mb-1">
                      Vehicles Serviced
                    </div>
                    <div className="font-head text-[22px] font-semibold text-text uppercase">
                      Cars &amp; Motorbikes
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/services" className="btn btn-gold">
                    Explore Services
                  </Link>
                  <Link href="/contact" className="btn btn-line">
                    Get In Touch
                  </Link>
                </div>
              </div>

              {/* Right Column: Workshop Photo Slot */}
              <div className="lg:col-span-5">
                <div className="bg-panel border border-line p-6 rounded-[2px]">
                  {/* SLOT: Real studio / team photograph to replace this placeholder */}
                  <div className="relative aspect-[4/3] w-full bg-black border border-line border-dashed rounded-[2px] flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-gold text-3xl mb-3 opacity-60">❖</span>
                    <span className="font-head text-[22px] uppercase font-semibold text-text mb-2">
                      Studio Bay Photo Slot
                    </span>
                    <span className="text-muted text-[13px] max-w-xs leading-relaxed">
                      Official workshop bay and team photography will be placed here once provided by the studio.
                    </span>
                  </div>
                  <p className="text-muted text-[13px] mt-4 mb-0 text-center">
                    Paramaathma’s Auto Alchemy • Byregowda Layout, Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Banner */}
        <section className="py-14 border-t border-line bg-panel">
          <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-head text-[24px] uppercase font-semibold text-text m-0 mb-1">
                Have questions or need consultation?
              </h3>
              <p className="text-muted text-[15px] m-0">
                Direct WhatsApp consultation with our detailing specialists.
              </p>
            </div>
            <a
              href={getWhatsAppUrl('Hi, I’d like to know more about Auto Alchemy.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold shrink-0"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

