export interface InventoryDetail {
  id: number;
  name: string;
  category: string;
  sku: string;
  units: number;
  status: "optimal" | "low" | "critical";
}
