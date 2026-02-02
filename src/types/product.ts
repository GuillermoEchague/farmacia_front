export interface Product {
  id: number;
  name: string;
  available: number;
  expiry: string;
  category: string;
  price: number;
  lowStock?: boolean;
  criticalExpiry?: boolean;
}
