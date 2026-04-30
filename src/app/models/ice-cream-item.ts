export interface IceCreamItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  available: boolean;
  toppings?: string[];
  sizes?: string[];
}
