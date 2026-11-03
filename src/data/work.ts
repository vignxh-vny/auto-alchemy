export interface WorkItem {
  id: string;
  title: string;
  service: string;
  vehicle: string;
  image: string;
  isSample: boolean;
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  service: string;
  vehicle: string;
  beforeImage: string;
  afterImage: string;
  note: string;
}

export const beforeAfterSample: BeforeAfterPair = {
  id: 'paint-correction',
  title: 'Paint Correction & Ceramic Coating',
  service: 'Multi-stage paint correction & ceramic coating',
  vehicle: 'Luxury Sedan / Coupe',
  beforeImage: '/work/before-paint.jpg',
  afterImage: '/work/after-paint.jpg',
  note: 'Sample transformation visual. Real before and after studio photos will replace this.',
};

/**
 * Gallery items for studio work.
 * Per specification: Ship with sample/placeholder items clearly labelled "Sample".
 * Never present stock or AI images as the studio's verified client work.
 */
export const workGalleryData: WorkItem[] = [
  {
    id: 'sample-1',
    title: 'Ceramic Coating Mirror Gloss Finish',
    service: 'Ceramic Coating',
    vehicle: 'Sedan',
    image: '/work/sample-ceramic.jpg',
    isSample: true,
  },
  {
    id: 'sample-2',
    title: 'Precision Paint Protection Film Wrapping',
    service: 'Paint Protection Film (PPF)',
    vehicle: 'Sports Car',
    image: '/work/sample-ppf.jpg',
    isSample: true,
  },
  {
    id: 'sample-3',
    title: 'Graphene Coating Hydrophobic Water Beading',
    service: 'Graphene Coating',
    vehicle: 'Coupe',
    image: '/work/sample-graphene.jpg',
    isSample: true,
  },
  {
    id: 'sample-4',
    title: 'Bike Crash Guard & Protection Fitting',
    service: 'Bike Accessories',
    vehicle: 'Royal Enfield Hunter',
    image: '/work/sample-bike.jpg',
    isSample: true,
  },
];
