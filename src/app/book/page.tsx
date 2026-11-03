import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book an Appointment — Paramaathma’s Auto Alchemy',
  description:
    'Book a detailing, coating, or accessories installation appointment for your car or bike with Auto Alchemy in Bengaluru.',
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main id="top" className="pt-[110px] md:pt-[130px]">
        {/* Header */}
        <section className="py-12 md:py-16 border-b border-line">
          <div className="wrap text-center max-w-2xl mx-auto">
            <h1 className="font-head text-[clamp(44px,7vw,84px)] uppercase font-bold leading-none mb-6 tracking-[0.01em]">
              Book Appointment
            </h1>
            <p className="text-muted text-[17px] md:text-[19px] leading-[1.6] m-0">
              Provide your vehicle details and service requirements. Your request will format into a message and open directly in WhatsApp for studio confirmation.
            </p>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-16 md:py-24">
          <div className="wrap">
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

