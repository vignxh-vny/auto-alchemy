export type PreownedVehicleType = 'car' | 'bike';

export interface PreownedVehicle {
  id: string;
  type: PreownedVehicleType;
  make: string;
  model: string;
  year: number;
  price: string;
  condition: string;
  photos: string[];
  whatsappMessage: string;
}

/**
 * Pre-owned vehicles catalog.
 * Per specification: Ship with an empty list and an empty state.
 * Do not invent fake vehicles or inventory.
 */
export const preownedVehiclesData: PreownedVehicle[] = [];

export const preownedEmptyState = {
  message: 'No vehicles listed right now. Ask us on WhatsApp.',
  whatsappMessage: 'Hi, I’d like to enquire about pre-owned vehicles available at Auto Alchemy.',
};

