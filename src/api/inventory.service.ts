import type { Product } from "../types/product";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Amoxicillin 500mg",
    sku: "AMX-001",
    stock: 14,
    price: 24.50,
    category: "Antibiotics",
    expiryDate: "10/2025",
    status: "low-stock"
  },
  {
    id: "2",
    name: "Lisinopril 10mg",
    sku: "LIS-042",
    stock: 150,
    price: 12.99,
    category: "Blood Pressure",
    expiryDate: "12/2026",
    status: "in-stock"
  },
  {
    id: "3",
    name: "Metformin 850mg",
    sku: "MET-850",
    stock: 82,
    price: 18.25,
    category: "Diabetes",
    expiryDate: "04/2024",
    status: "critical-expiry"
  },
  {
    id: "4",
    name: "Atorvastatin 20mg",
    sku: "ATR-201",
    stock: 310,
    price: 35.00,
    category: "Cholesterol",
    expiryDate: "08/2027",
    status: "in-stock"
  },
  {
    id: "5",
    name: "Omeprazole 20mg",
    sku: "OME-020",
    stock: 8,
    price: 15.45,
    category: "Gastrointestinal",
    expiryDate: "02/2026",
    status: "low-stock"
  }
];

export const getProducts = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts;
};

export const getProductById = async (id: string) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockProducts.find(p => p.id === id);
};
