import React from 'react';
import ServiceCard from './ServiceCard';
import { landingServices, servicesNote } from '@/data/services';

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <h2 className="font-head text-[clamp(38px,5vw,60px)] uppercase font-semibold leading-none mb-14 tracking-[0.01em]">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {landingServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <p className="note text-muted text-[14px] mt-7">
          {servicesNote}
        </p>
      </div>
    </section>
  );
}
