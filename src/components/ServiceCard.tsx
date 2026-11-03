import React from 'react';
import { ServiceItem } from '@/data/services';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const whatsappUrl = getWhatsAppUrl(service.whatsappMessage);

  return (
    <article className="card bg-panel border border-line p-[32px_28px] flex flex-col rounded-[2px] transition-colors duration-200 hover:border-gold">
      <h3 className="font-head text-[28px] uppercase font-semibold leading-none tracking-[0.01em]">
        {service.name}
      </h3>
      <p className="text-muted mt-3 mb-7 text-[16px] leading-[1.6]">
        {service.description}
      </p>

      {service.isCustomPriceText ? (
        <div
          className="price font-head font-semibold text-gold leading-none mt-auto"
          style={{ fontSize: '30px', paddingTop: '11px' }}
        >
          {service.price}
        </div>
      ) : (
        <div className="price font-head text-[46px] font-semibold text-gold leading-none mt-auto">
          {service.pricePrefix && (
            <small className="font-body text-[14px] font-normal text-muted mr-2">
              {service.pricePrefix}
            </small>
          )}
          {service.price}
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-line mt-[22px] w-full text-center"
      >
        Enquire
      </a>
    </article>
  );
}

