export interface SiteConfig {
  name: string;
  shortName: string;
  phone: string;
  phoneTel: string;
  whatsappNumber: string;
  address: {
    line1: string;
    line2: string;
    full: string;
  };
  instagram: string;
  mapsLink: string;
  hours: string | null;
  established: number;
  tagline: string;
  conceptTag: string;
  disclaimer: string;
}

export const siteData: SiteConfig = {
  name: "Paramaathma’s Auto Alchemy",
  shortName: "Auto Alchemy",
  phone: "+91 91801 86139",
  phoneTel: "tel:+919180186139",
  whatsappNumber: "919180186139",
  address: {
    line1: "1272, Muddinapalya Main Road, Byregowda Layout,",
    line2: "Annapurneshwari Nagar, Bengaluru 560091",
    full: "1272, Muddinapalya Main Road, Sir M. Vishweshwaraiah Layout, 5th Block, 8th Block, Byregowda Layout, Annapurneshwari Nagar, Bengaluru, Karnataka 560091",
  },
  instagram: "https://www.instagram.com/paramaathmas_auto_alchemy/",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=1272+Muddinapalya+Main+Road+Annapurneshwari+Nagar+Bengaluru+560091",
  hours: null, // Opening hours unconfirmed by owner. Only rendered when not null.
  established: 2026,
  tagline: "PROTECT / ENHANCE / PRESERVE",
  conceptTag: "Concept demo",
  disclaimer:
    "Concept demo made for a pitch. Not the official website of Paramaathma’s Auto Alchemy.",
};

