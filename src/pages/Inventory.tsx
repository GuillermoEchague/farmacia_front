import { useState } from "react";
import "../styles/inventory.css";
import { Product } from "../types/product";
import InventoryHeader from "../components/inventory/InventoryHeader";
import SearchBar from "../components/inventory/SearchBar";
import FilterTabs from "../components/inventory/FilterTabs";
import ProductItem from "../components/inventory/ProductItem";
import BottomNav from "../components/BottomNav";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Amoxicillin 500mg",
    available: 14,
    expiry: "10/2025",
    category: "Antibiotics",
    price: 24.5,
    lowStock: true,
  },
  {
    id: 2,
    name: "Lisinopril 10mg",
    available: 150,
    expiry: "12/2026",
    category: "Blood Pressure",
    price: 12.99,
  },
  {
    id: 3,
    name: "Metformin 850mg",
    available: 82,
    expiry: "04/2024",
    category: "Diabetes",
    price: 18.25,
    criticalExpiry: true,
  },
  {
    id: 4,
    name: "Atorvastatin 20mg",
    available: 310,
    expiry: "08/2027",
    category: "Cholesterol",
    price: 35,
  },
  {
    id: 5,
    name: "Omeprazole 20mg",
    available: 8,
    expiry: "02/2026",
    category: "Gastrointestinal",
    price: 15.45,
    lowStock: true,
  },
];

const Inventory = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredProducts = mockProducts.filter((p) => {
    if (filter === "low") return p.lowStock;
    if (filter === "expiry") return p.criticalExpiry;
    return p.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="inventory-container">
      <InventoryHeader />

      <SearchBar value={search} onChange={setSearch} />

      <FilterTabs active={filter} onChange={setFilter} />

      <p className="total">TOTAL PRODUCTS: {filteredProducts.length}</p>

      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      <p className="end">End of inventory list</p>

      <BottomNav />
    </div>
  );
};

export default Inventory;
