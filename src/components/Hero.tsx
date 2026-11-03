import React from 'react';
import Image from 'next/image';
import { siteData } from '@/data/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section className="hero">
      {/* Ambient Hero Detailing Bay Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
        <div className="relative w-full h-full">
          <Image
            src="/hero-studio.jpg"
            alt="Auto Alchemy detailing bay with precision lighting"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center lg:object-right opacity-80 sm:opacity-85 lg:opacity-75 lg:[mask-image:linear-gradient(to_right,transparent_0%,black_25%,black_85%,transparent_100%)]"
          />
        </div>
        {/* Soft mobile gradient overlay to ensure text readability while keeping car detailing crisp and vibrant */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/35 to-bg/90 lg:hidden pointer-events-none" />
      </div>

      <div className="wrap relative z-10 w-full">
        <h1 className="hero-in font-head uppercase font-bold text-[clamp(54px,9.2vw,132px)] leading-none tracking-[0.01em] max-w-[11ch] drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Protect your ride. Perfect every detail.
        </h1>
        <p
          className="hero-in text-[19px] text-muted max-w-[34ch] mt-7 mb-10 leading-[1.6] drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
          style={{ animationDelay: '0.12s' }}
        >
          Detailing, coatings and paint protection for cars and bikes.
        </p>
        <div
          className="cta hero-in flex flex-wrap gap-[14px]"
          style={{ animationDelay: '0.24s' }}
        >
          <a
            href={getWhatsAppUrl('Hi, I’d like to book an appointment.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold w-full sm:w-auto"
          >
            Book appointment
          </a>
          <a href="#services" className="btn btn-line w-full sm:w-auto">
            View services
          </a>
        </div>
        <div
          className="motto hero-in mt-16 font-body font-medium text-[12px] sm:text-[13px] tracking-[0.2em] sm:tracking-[0.32em] text-gold uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
          style={{ animationDelay: '0.36s' }}
        >
          {siteData.tagline}
        </div>
      </div>
    </section>
  );
}
