'use client';

import React, { useState } from 'react';
import { faqData } from '@/data/faq';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="divide-y divide-line border-y border-line">
      {faqData.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-5 transition-colors">
            <button
              type="button"
              className="w-full flex items-center justify-between text-left gap-4 py-2 bg-transparent border-0 cursor-pointer text-text group"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              <span className="font-head text-[22px] md:text-[26px] uppercase font-semibold tracking-[0.01em] group-hover:text-gold transition-colors duration-200">
                {item.question}
              </span>
              <span className="text-gold text-2xl font-light shrink-0 transition-transform duration-200">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
                className="pt-3 pb-2 text-muted text-[16px] leading-[1.6] max-w-3xl"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

