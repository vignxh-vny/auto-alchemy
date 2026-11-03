import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[75vh] flex items-center pt-[100px]">
        <div className="wrap py-24 text-left">
          <div className="font-head text-[clamp(72px,12vw,140px)] font-bold text-gold leading-none mb-4">
            404
          </div>
          <h1 className="font-head text-[clamp(36px,5vw,60px)] uppercase font-semibold leading-none mb-6">
            Page Not Found
          </h1>
          <p className="text-muted text-[18px] max-w-lg mb-10 leading-[1.6]">
            The page you are looking for doesn’t exist or has been relocated. Explore our detailing services or return to the home page.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/" className="btn btn-gold">
              Return Home
            </Link>
            <Link href="/services" className="btn btn-line">
              View Services
            </Link>
            <a
              href={getWhatsAppUrl('Hi, I have a question about your services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

