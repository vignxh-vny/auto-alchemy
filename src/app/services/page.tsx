import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServiceRow from '@/components/ServiceRow';
import Faq from '@/components/Faq';
import { carCareServices, bikeCareServices, servicesNote } from '@/data/services';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Services — Paramaathma’s Auto Alchemy',
  description:
    'Full detailing, ceramic coating, graphene coating, PPF, and bike accessories in Muddinapalya, Bengaluru.',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="top" className="pt-[110px] md:pt-[130px]">
        {/* Header */}
        <section className="py-12 md:py-16 border-b border-line">
          <div className="wrap">
            <h1 className="font-head text-[clamp(44px,7vw,84px)] uppercase font-bold leading-none mb-6 tracking-[0.01em]">
              Services & Pricing
            </h1>
            <p className="text-muted text-[18px] md:text-[20px] max-w-2xl leading-[1.6]">
              Comprehensive detailing, long-lasting surface protection, and specialty bike accessories. Every service is performed with precision.
            </p>
          </div>
        </section>

        {/* Car Care Group */}
        <section className="py-16 md:py-24">
          <div className="wrap">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-line">
              <div>
                <h2 className="font-head text-[clamp(32px,4vw,48px)] uppercase font-semibold leading-none tracking-[0.01em]">
                  Car Care
                </h2>
                <p className="text-muted text-[15px] mt-2 mb-0">
                  Paint correction, detailing, and multi-year protective coatings.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {carCareServices.map((service) => (
                <ServiceRow key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Bike Care Group */}
        <section className="py-16 md:py-24 bg-panel border-y border-line">
          <div className="wrap">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-line">
              <div>
                <h2 className="font-head text-[clamp(32px,4vw,48px)] uppercase font-semibold leading-none tracking-[0.01em]">
                  Bike Care & Accessories
                </h2>
                <p className="text-muted text-[15px] mt-2 mb-0">
                  Specialized crash protection, underbody plates, and precision fitting.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {bikeCareServices.map((service) => (
                <ServiceRow key={service.id} service={service} />
              ))}
            </div>

            <p className="note text-muted text-[14px] mt-8">
              {servicesNote}
            </p>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 md:py-24">
          <div className="wrap">
            <div className="mb-12">
              <h2 className="font-head text-[clamp(32px,4vw,48px)] uppercase font-semibold leading-none tracking-[0.01em] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted text-[16px] max-w-xl">
                Common questions about paint coatings, film application, and workshop appointments.
              </p>
            </div>

            <Faq />
          </div>
        </section>

        {/* Booking Consultation CTA */}
        <section className="py-16 md:py-20 border-t border-line bg-panel text-left">
          <div className="wrap">
            <h2 className="font-head uppercase font-semibold leading-none max-w-xl mb-6 text-[clamp(36px,5vw,64px)] tracking-[0.01em]">
              Have questions about your vehicle?
            </h2>
            <p className="text-muted text-[17px] max-w-lg mb-8 leading-[1.6]">
              Share your vehicle model and requirements directly with our team on WhatsApp for an accurate quote.
            </p>
            <div className="cta flex flex-wrap gap-[14px]">
              <a
                href={getWhatsAppUrl('Hi, I’d like to book an appointment.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold w-full sm:w-auto"
              >
                Book appointment
              </a>
              <a
                href={getWhatsAppUrl('Hi, I have a question about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line w-full sm:w-auto"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

