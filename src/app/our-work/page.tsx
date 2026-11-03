'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Lightbox from '@/components/Lightbox';
import { workGalleryData } from '@/data/work';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function OurWorkPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => ((prev! + 1) % workGalleryData.length));
    }
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) => ((prev! - 1 + workGalleryData.length) % workGalleryData.length));
    }
  };

  return (
    <>
      <Navbar />
      <main id="top" className="pt-[110px] md:pt-[130px]">
        {/* Header */}
        <section className="py-12 md:py-16 border-b border-line">
          <div className="wrap">
            <h1 className="font-head text-[clamp(44px,7vw,84px)] uppercase font-bold leading-none mb-6 tracking-[0.01em]">
              Our Work
            </h1>
            <p className="text-muted text-[18px] md:text-[20px] max-w-2xl leading-[1.6]">
              A glimpse into the surface transformations, optical clarity, and protective finishes crafted at Auto Alchemy.
            </p>
          </div>
        </section>

        {/* Interactive Before & After Slider */}
        <BeforeAfterSlider />

        {/* Gallery Grid */}
        <section className="py-16 md:py-24">
          <div className="wrap">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-line">
              <div>
                <h2 className="font-head text-[clamp(32px,4vw,48px)] uppercase font-semibold leading-none tracking-[0.01em]">
                  Studio Gallery
                </h2>
                <p className="text-muted text-[15px] mt-2 mb-0">
                  Sample portfolio visuals. Real client vehicle photos will replace these placeholders.
                </p>
              </div>
            </div>

            {workGalleryData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {workGalleryData.map((item, index) => (
                  <article
                    key={item.id}
                    onClick={() => handleOpenLightbox(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOpenLightbox(index);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${item.title}`}
                    className="card bg-panel border border-line p-4 sm:p-5 rounded-[2px] cursor-pointer hover:border-gold transition-colors duration-200 group outline-none focus-visible:border-gold"
                  >
                    <div className="relative aspect-[16/10] w-full bg-black border border-line overflow-hidden mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {item.isSample && (
                        <span className="absolute top-3 left-3 font-body text-[11px] font-medium text-red bg-bg/90 border border-red py-[2px] px-2 rounded-[2px] tracking-[0.03em]">
                          Sample visual
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-head text-[20px] sm:text-[24px] uppercase font-semibold text-text group-hover:text-gold transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted text-[14px] mt-1 m-0">
                          {item.service} • {item.vehicle}
                        </p>
                      </div>
                      <span className="text-gold text-lg font-light shrink-0">
                        ↗
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="bg-panel border border-line p-10 md:p-16 rounded-[2px] text-center max-w-xl mx-auto">
                <h2 className="font-head text-[28px] uppercase font-semibold text-text mb-4">
                  Portfolio Updates Coming Soon
                </h2>
                <p className="text-muted text-[16px] leading-[1.6] mb-8">
                  Recent project photos are being cataloged. Ask us on WhatsApp to see recent examples of work done on cars and bikes.
                </p>
                <a
                  href={getWhatsAppUrl('Hi, I’d like to see recent photos of your work.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold inline-flex"
                >
                  Ask us on WhatsApp
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <Lightbox
          items={workGalleryData}
          currentIndex={selectedPhotoIndex}
          onClose={handleCloseLightbox}
          onNext={handleNextPhoto}
          onPrev={handlePrevPhoto}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

