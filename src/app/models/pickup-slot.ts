export interface PickupSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  maxOrders?: number;
  currentOrders?: number;
}
