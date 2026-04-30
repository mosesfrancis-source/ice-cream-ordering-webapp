import { CartItem } from './cart-item';

export type OrderStatus = 'Pending' | 'Preparing' | 'Ready' | 'Completed' | 'Cancelled';

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: CartItem[];
  pickupDate: string;
  pickupTime: string;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}
