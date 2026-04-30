import { IceCreamItem } from './ice-cream-item';

export interface CartItem {
  item: IceCreamItem;
  size: string;
  toppings: string[];
  quantity: number;
  subtotal: number;
}
