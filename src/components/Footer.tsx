import React from 'react';
import Link from 'next/link';
import { siteData } from '@/data/site';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line py-[56px] text-muted text-[15px]">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <h4 className="m-0 mb-3 text-text font-body font-semibold text-[15px]">
              {siteData.name}
            </h4>
            <p className="m-0 mb-[6px] leading-[1.6]">
              {siteData.address.line1}
              <br />
              {siteData.address.line2}
            </p>
            <p className="m-0 mb-[6px]">
              <a
                href={siteData.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors duration-200"
              >
                Get directions
              </a>
            </p>
          </div>

          <div>
            <h4 className="m-0 mb-3 text-text font-body font-semibold text-[15px]">
              Contact
            </h4>
            <p className="m-0 mb-[6px]">
              <a
                href={siteData.phoneTel}
                className="hover:text-gold transition-colors duration-200"
              >
                {siteData.phone}
              </a>
            </p>
            <p className="m-0 mb-[6px]">
              <a
                href={getWhatsAppUrl('Hi, I have a question about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors duration-200"
              >
                WhatsApp
              </a>
            </p>
            <p className="m-0 mb-[6px]">
              <a
                href={siteData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors duration-200"
              >
                Instagram
              </a>
            </p>
          </div>

          <div>
            <h4 className="m-0 mb-3 text-text font-body font-semibold text-[15px]">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <p className="m-0">
                <Link
                  href="/services"
                  className="hover:text-gold transition-colors duration-200"
                >
                  Services
                </Link>
              </p>
              <p className="m-0">
                <Link
                  href="/our-work"
                  className="hover:text-gold transition-colors duration-200"
                >
                  Our work
                </Link>
              </p>
              <p className="m-0">
                <Link
                  href="/about"
                  className="hover:text-gold transition-colors duration-200"
                >
                  About
                </Link>
              </p>
              <p className="m-0">
                <Link
                  href="/pre-owned"
                  className="hover:text-gold transition-colors duration-200"
                >
                  Pre-owned
                </Link>
              </p>
              <p className="m-0">
                <Link
                  href="/book"
                  className="hover:text-gold transition-colors duration-200"
                >
                  Book
                </Link>
              </p>
              <p className="m-0">
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors duration-200"
                >
                  Contact
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="legal mt-12 pt-6 border-t border-line text-[13px] text-muted">
          {siteData.disclaimer}
        </div>
      </div>
    </footer>
  );
}
