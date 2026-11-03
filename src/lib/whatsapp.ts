import { siteData } from '@/data/site';

/**
 * Builds a direct WhatsApp chat URL with a prefilled message.
 * @param message Prefilled message to open in WhatsApp chat
 * @returns Full wa.me link with encoded text
 */
export function getWhatsAppUrl(
  message: string = 'Hi, I’d like to enquire about your services.'
): string {
  return `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
