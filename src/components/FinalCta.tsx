import React from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function FinalCta() {
  return (
    <section className="final border-t border-line text-left">
      <div className="wrap">
        <h2 className="font-head uppercase font-semibold leading-none max-w-[14ch] mb-10 text-[clamp(44px,7vw,92px)] tracking-[0.01em]">
          Your vehicle deserves the Auto Alchemy experience.
        </h2>
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
  );
}

