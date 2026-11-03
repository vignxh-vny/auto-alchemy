export interface WorkItem {
  id: string;
  title: string;
  service: string;
  vehicle: string;
  image: string;
  isSample: boolean;
}

/**
 * Gallery items for studio work.
 * Per specification: Ship with sample/placeholder items clearly labelled "Sample".
 * Never present stock or AI images as the studio's real work.
 */
export const workGalleryData: WorkItem[] = [
  {
    id: 'sample-1',
    title: 'Ceramic Coating Gloss Preparation',
    service: 'Ceramic Coating',
    vehicle: 'Sedan',
    image: '/work/sample-1.svg',
    isSample: true,
  },
  {
    id: 'sample-2',
    title: 'Precision Paint Protection Film Wrapping',
    service: 'Paint Protection Film (PPF)',
    vehicle: 'SUV',
    image: '/work/sample-2.svg',
    isSample: true,
  },
  {
    id: 'sample-3',
    title: 'Graphene Coating Hydrophobic Layer',
    service: 'Graphene Coating',
    vehicle: 'Coupe',
    image: '/work/sample-3.svg',
    isSample: true,
  },
  {
    id: 'sample-4',
    title: 'Bike Crash Guard & Protection Fitting',
    service: 'Bike Accessories',
    vehicle: 'Royal Enfield Hunter',
    image: '/work/sample-4.svg',
    isSample: true,
  },
];
