import React from 'react';
import { ServiceItem } from '@/data/services';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceRowProps {
  service: ServiceItem;
}

export default function ServiceRow({ service }: ServiceRowProps) {
  const whatsappUrl = getWhatsAppUrl(service.whatsappMessage);

  return (
    <article className="bg-panel border border-line p-6 md:p-8 rounded-[2px] transition-colors duration-200 hover:border-gold flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div className="flex-1 max-w-2xl">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="font-head text-[26px] md:text-[30px] uppercase font-semibold leading-tight tracking-[0.01em] text-text">
            {service.name}
          </h3>
          <span className="font-body text-[11px] font-medium text-muted uppercase tracking-[0.08em] border border-line px-2 py-[2px] rounded-[2px]">
            Works for: {service.worksFor}
          </span>
        </div>
        <p className="text-muted text-[15px] md:text-[16px] leading-[1.6] m-0">
          {service.description}
        </p>
      </div>

      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-line">
        <div className="font-head text-gold font-semibold leading-none text-[32px] md:text-[38px]">
          {service.pricePrefix && (
            <small className="font-body text-[14px] font-normal text-muted mr-2">
              {service.pricePrefix}
            </small>
          )}
          {service.price}
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-line !h-[42px] px-6 text-[14px] w-auto"
        >
          Enquire
        </a>
      </div>
    </article>
  );
}

