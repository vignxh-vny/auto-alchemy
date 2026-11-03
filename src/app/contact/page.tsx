import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { siteData } from '@/data/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact — Paramaathma’s Auto Alchemy',
  description:
    'Contact Paramaathma’s Auto Alchemy detailing studio in Bengaluru. Phone, WhatsApp, directions, and Instagram.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="top" className="pt-[110px] md:pt-[130px]">
        {/* Header */}
        <section className="py-12 md:py-16 border-b border-line">
          <div className="wrap">
            <h1 className="font-head text-[clamp(44px,7vw,84px)] uppercase font-bold leading-none mb-6 tracking-[0.01em]">
              Contact The Studio
            </h1>
            <p className="text-muted text-[18px] md:text-[20px] max-w-2xl leading-[1.6]">
              Located in Muddinapalya, Bengaluru. Reach out via WhatsApp or phone to book a consultation or ask about pricing for your car or bike.
            </p>
          </div>
        </section>

        {/* Contact Information Grid */}
        <section className="py-16 md:py-24">
          <div className="wrap">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Studio Address */}
              <div className="card bg-panel border border-line p-8 rounded-[2px] flex flex-col justify-between hover:border-gold transition-colors duration-200">
                <div>
                  <h3 className="font-head text-[26px] uppercase font-semibold text-text mb-4">
                    Studio Location
                  </h3>
                  <p className="text-muted text-[16px] leading-[1.6] mb-6">
                    {siteData.address.line1}
                    <br />
                    {siteData.address.line2}
                  </p>
                </div>
                <a
                  href={siteData.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line w-full text-center"
                >
                  Get directions
                </a>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="card bg-panel border border-line p-8 rounded-[2px] flex flex-col justify-between hover:border-gold transition-colors duration-200">
                <div>
                  <h3 className="font-head text-[26px] uppercase font-semibold text-text mb-4">
                    Call & WhatsApp
                  </h3>
                  <p className="text-muted text-[16px] leading-[1.6] mb-2">
                    Direct line:
                  </p>
                  <p className="font-head text-[32px] font-semibold text-gold mb-6 leading-none">
                    <a href={siteData.phoneTel} className="hover:text-gold-soft transition-colors">
                      {siteData.phone}
                    </a>
                  </p>
                </div>
                <a
                  href={getWhatsAppUrl('Hi, I have a question about your services.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold w-full text-center"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Online & Social */}
              <div className="card bg-panel border border-line p-8 rounded-[2px] flex flex-col justify-between hover:border-gold transition-colors duration-200">
                <div>
                  <h3 className="font-head text-[26px] uppercase font-semibold text-text mb-4">
                    Instagram & Media
                  </h3>
                  <p className="text-muted text-[16px] leading-[1.6] mb-6">
                    Follow recent reels, client vehicles, and studio updates on our official Instagram page.
                  </p>
                </div>
                <a
                  href={siteData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line w-full text-center"
                >
                  View Instagram
                </a>
              </div>
            </div>

            {/* Opening hours conditional block (only rendered if hours is not null) */}
            {siteData.hours && (
              <div className="mt-12 p-8 bg-panel border border-line rounded-[2px]">
                <h3 className="font-head text-[24px] uppercase font-semibold text-text mb-2">
                  Operating Hours
                </h3>
                <p className="text-muted text-[16px] m-0">{siteData.hours}</p>
              </div>
            )}
          </div>
        </section>

        {/* Quick Booking Note */}
        <section className="py-16 md:py-20 border-t border-line bg-panel">
          <div className="wrap flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-head text-[clamp(32px,5vw,56px)] uppercase font-semibold leading-none mb-4">
                Ready to protect your vehicle?
              </h2>
              <p className="text-muted text-[16px] leading-[1.6] m-0">
                Appointments are scheduled in advance to ensure dedicated bay time and undivided focus for every vehicle.
              </p>
            </div>
            <a
              href={getWhatsAppUrl('Hi, I’d like to book an appointment.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold shrink-0 w-full sm:w-auto"
            >
              Book appointment
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

