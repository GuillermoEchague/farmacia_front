export interface Product {
  id: string;
  name: string;
  sku: string;
  stock: number;
  price: number;
  category: string;
  expiryDate: string;
  status: 'in-stock' | 'low-stock' | 'critical-expiry' | 'out-of-stock';
}
