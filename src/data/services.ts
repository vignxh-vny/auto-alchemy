export type VehicleCategory = 'cars' | 'bikes' | 'cars / bikes';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  pricePrefix?: string;
  isCustomPriceText?: boolean;
  category: 'car-care' | 'bike-care';
  worksFor: VehicleCategory;
  whatsappMessage: string;
  note?: string;
}

/**
 * The 5 approved advertised services displayed on the home landing page.
 * Matches auto-alchemy-landing.html exactly.
 */
export const landingServices: ServiceItem[] = [
  {
    id: 'detailing',
    name: 'Interior & exterior detailing',
    description: 'A full clean inside and out.',
    price: '₹3,999',
    category: 'car-care',
    worksFor: 'cars / bikes',
    whatsappMessage: 'Hi, I’d like to enquire about Interior & Exterior Detailing.',
  },
  {
    id: 'ceramic-coating',
    name: 'Ceramic coating',
    description: 'Gloss and protection for your paint.',
    price: '₹12,999',
    category: 'car-care',
    worksFor: 'cars / bikes',
    whatsappMessage: 'Hi, I’d like to enquire about Ceramic Coating.',
  },
  {
    id: 'graphene-coating',
    name: 'Graphene coating',
    description: 'A premium finish with added protection.',
    price: '₹16,999',
    category: 'car-care',
    worksFor: 'cars / bikes',
    whatsappMessage: 'Hi, I’d like to enquire about Graphene Coating.',
  },
  {
    id: 'ppf',
    name: 'Paint protection film',
    description: 'Clear film that guards against everyday wear.',
    pricePrefix: 'From',
    price: '₹49,999',
    category: 'car-care',
    worksFor: 'cars / bikes',
    whatsappMessage: 'Hi, I’d like to enquire about Paint Protection Film (PPF).',
  },
  {
    id: 'bike-accessories',
    name: 'Bike accessories',
    description: 'Crash guards, bash plates and fitting.',
    price: 'Ask for a quote',
    isCustomPriceText: true,
    category: 'bike-care',
    worksFor: 'bikes',
    whatsappMessage: 'Hi, I’d like to enquire about bike accessories.',
  },
];

/**
 * Comprehensive service list for the /services page, grouped into Car Care and Bike Care.
 * Follows AUTO_ALCHEMY_FULL_SITE.md section 2.
 */
export const carCareServices: ServiceItem[] = [
  {
    id: 'car-detailing',
    name: 'Interior & exterior detailing',
    description: 'Deep decontamination, interior sterilization, steam cleaning, and exterior paint cleanse. Details confirmed on enquiry.',
    price: '₹3,999',
    category: 'car-care',
    worksFor: 'cars / bikes',
    whatsappMessage: 'Hi, I’d like to enquire about Interior & Exterior Detailing.',
  },
  {
    id: 'car-ceramic',
    name: 'Ceramic coating',
    description: 'Hydrophobic protection and deep gloss enhancement for painted surfaces. Details confirmed on enquiry.',
    price: '₹12,999',
    category: 'car-care',
    worksFor: 'cars / bikes',
    whatsappMessage: 'Hi, I’d like to enquire about Ceramic Coating.',
  },
  {
    id: 'car-graphene',
    name: 'Graphene coating',
    description: 'Premium carbon-infused coating providing advanced heat resistance and durability. Details confirmed on enquiry.',
    price: '₹16,999',
    category: 'car-care',
    worksFor: 'cars / bikes',
    whatsappMessage: 'Hi, I’d like to enquire about Graphene Coating.',
  },
  {
    id: 'car-ppf',
    name: 'Paint protection film (PPF)',
    description: 'High-clarity polyurethane film shielding surfaces against stone chips, scratches, and everyday wear. Details confirmed on enquiry.',
    pricePrefix: 'From',
    price: '₹49,999',
    category: 'car-care',
    worksFor: 'cars / bikes',
    whatsappMessage: 'Hi, I’d like to enquire about Paint Protection Film (PPF).',
  },
  {
    id: 'car-sun-films',
    name: 'Sun films / tint',
    description: 'Solar heat rejection and interior UV protection films. Details confirmed on enquiry.',
    price: 'Ask for a quote',
    isCustomPriceText: true,
    category: 'car-care',
    worksFor: 'cars',
    whatsappMessage: 'Hi, I’d like to enquire about Sun films / tint.',
  },
];

export const bikeCareServices: ServiceItem[] = [
  {
    id: 'bike-accessories-pack',
    name: 'Bike accessories & fitting',
    description: 'Quality accessories, crash protection, and professional installation. Details confirmed on enquiry.',
    price: 'Quote on enquiry',
    isCustomPriceText: true,
    category: 'bike-care',
    worksFor: 'bikes',
    whatsappMessage: 'Hi, I’d like to enquire about bike accessories and fitting.',
  },
  {
    id: 'bike-crash-guards',
    name: 'Crash guards & bash plates',
    description: 'Rugged underbody and engine protection. The studio has fitted guards on models including Royal Enfield Hunter; ask about your model.',
    price: 'Quote on enquiry',
    isCustomPriceText: true,
    category: 'bike-care',
    worksFor: 'bikes',
    whatsappMessage: 'Hi, I’d like to enquire about crash guards and bash plates for my bike.',
  },
];

export const servicesNote =
  'Prices are as advertised by the studio. The final quote is confirmed on enquiry.';
