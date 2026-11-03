export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 'ceramic-vs-graphene',
    question: 'What is the difference between ceramic and graphene coating?',
    // CONFIRM WITH OWNER: Specific coating brands and endurance metrics depend on studio inventory
    answer:
      'Both are protective liquid polymer coatings applied to your vehicle’s clear coat to deliver gloss, hydrophobicity, and protection. Graphene incorporates carbon honeycomb structures that offer enhanced heat dispersion and chemical resistance. Exact differences and specific recommended options depend on the formulations used by our studio, so ask us during enquiry.',
  },
  {
    id: 'what-is-ppf',
    question: 'What is Paint Protection Film (PPF)?',
    // CONFIRM WITH OWNER: Specific film roll manufacturers, thicknesses (mils), and self-healing warranties
    answer:
      'Paint Protection Film (PPF) is an optical-grade, flexible polyurethane film professionally applied over painted panels. It provides physical sacrificial armor against stone chips, highway grit, light surface scratches, and environmental hazards.',
  },
  {
    id: 'appointment-duration',
    question: 'How long does a detailing or coating appointment take?',
    // CONFIRM WITH OWNER: Turnaround times per car size and cure periods
    answer:
      'Turnaround depends on the vehicle type, size, current paint condition, and selected service. Thorough detailing typically requires several hours, while multi-layer coatings require adequate prep, application, and initial curing time. Exact schedules are confirmed when you book.',
  },
  {
    id: 'bike-detailing',
    question: 'Can I book detailing or coatings for motorbikes?',
    answer:
      'Yes. We offer deep wash, surface decontamination, polishing, and protective ceramic or graphene coatings for motorcycles, as well as cars.',
  },
  {
    id: 'royal-enfield-accessories',
    question: 'Do you supply and install accessories for Royal Enfield and other bikes?',
    // CONFIRM WITH OWNER: Complete brand list of compatible aftermarket accessories
    answer:
      'Yes, the studio has fitted crash guards, bash plates, and auxiliary hardware on bikes including the Royal Enfield Hunter. Enquire on WhatsApp with your specific bike make and model to confirm compatibility.',
  },
];

