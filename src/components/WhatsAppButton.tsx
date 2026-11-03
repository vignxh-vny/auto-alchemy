import React from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl('Hi, I have a question about your services.');

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.47 15.04L2 22l5.1-1.34A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 1 1-4.2 15.03l-.3-.18-3 .79.8-2.92-.2-.31A8.1 8.1 0 0 1 12.04 3.8zm-3.1 3.7c-.2 0-.5.07-.77.36-.26.3-1 1-1 2.4s1.03 2.8 1.18 3c.14.2 2 3.2 4.9 4.4 2.4.95 2.9.76 3.4.7.52-.05 1.7-.7 1.93-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.34-.29-.15-1.7-.84-1.97-.94-.26-.1-.46-.14-.65.15-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.07-.3-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.7-1.6-2-.17-.28-.02-.44.13-.58.13-.13.3-.34.43-.5.14-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.14-.65-1.57-.9-2.14-.23-.55-.47-.48-.65-.49h-.55z" />
      </svg>
    </a>
  );
}

