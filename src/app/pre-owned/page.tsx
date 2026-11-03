'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import {
  preownedVehiclesData,
  preownedEmptyState,
  PreownedVehicleType,
} from '@/data/preowned';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function PreownedPage() {
  const [filter, setFilter] = useState<'all' | PreownedVehicleType>('all');

  const filteredVehicles = preownedVehiclesData.filter((v) => {
    if (filter === 'all') return true;
    return v.type === filter;
  });

  return (
    <>
      <Navbar />
      <main id="top" className="pt-[110px] md:pt-[130px]">
        {/* Header */}
        <section className="py-12 md:py-16 border-b border-line">
          <div className="wrap">
            <h1 className="font-head text-[clamp(44px,7vw,84px)] uppercase font-bold leading-none mb-6 tracking-[0.01em]">
              Pre-Owned Vehicles
            </h1>
            <p className="text-muted text-[18px] md:text-[20px] max-w-2xl leading-[1.6]">
              Quality pre-owned cars and motorcycles inspected and prepared by our detailing studio.
            </p>
          </div>
        </section>

        {/* Listings Section */}
        <section className="py-16 md:py-24">
          <div className="wrap">
            {preownedVehiclesData.length > 0 ? (
              <>
                {/* Filter Buttons */}
                <div className="flex gap-3 mb-10 pb-4 border-b border-line">
                  {(['all', 'car', 'bike'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFilter(type)}
                      className={`btn !h-[42px] px-6 text-[14px] uppercase tracking-wider ${
                        filter === type ? 'btn-gold' : 'btn-line'
                      }`}
                    >
                      {type === 'all' ? 'All Vehicles' : type === 'car' ? 'Cars' : 'Bikes'}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVehicles.map((vehicle) => (
                    <article
                      key={vehicle.id}
                      className="card bg-panel border border-line p-6 rounded-[2px] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-body text-[11px] font-medium text-gold border border-gold/40 px-2 py-0.5 rounded-[2px] uppercase">
                            {vehicle.type}
                          </span>
                          <span className="text-muted text-[13px]">{vehicle.year}</span>
                        </div>
                        <h3 className="font-head text-[24px] uppercase font-semibold text-text mb-2">
                          {vehicle.make} {vehicle.model}
                        </h3>
                        <p className="text-muted text-[14px] leading-relaxed mb-4">
                          {vehicle.condition}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-line flex items-center justify-between">
                        <div className="font-head text-[28px] font-semibold text-gold">
                          {vehicle.price}
                        </div>
                        <a
                          href={getWhatsAppUrl(vehicle.whatsappMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-line !h-[38px] px-4 text-[13px]"
                        >
                          Enquire
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              /* Empty state matching exact rule from specification */
              <div className="bg-panel border border-line p-10 md:p-16 rounded-[2px] text-center max-w-xl mx-auto">
                <div className="w-12 h-12 border border-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 text-gold text-xl font-light">
                  ✦
                </div>
                <h2 className="font-head text-[28px] md:text-[34px] uppercase font-semibold text-text mb-4 leading-tight">
                  {preownedEmptyState.message}
                </h2>
                <p className="text-muted text-[16px] leading-[1.6] mb-8">
                  We only list vehicles physically verified and inspected by our studio. Contact us on WhatsApp if you are searching for a specific model or wish to consign your vehicle.
                </p>
                <a
                  href={getWhatsAppUrl(preownedEmptyState.whatsappMessage)}
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

