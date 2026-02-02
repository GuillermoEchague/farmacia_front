import { useState } from "react";
import "../styles/sales.css";
import { SaleItem } from "../types/sale";
import SaleAlert from "../components/salesPOS/SaleAlert";
import SearchBar from "../components/salesPOS/SearchBar";
import CheckoutItem from "../components/salesPOS/CheckoutItem";
import TotalsCard from "../components/salesPOS/TotalsCard";
import BottomNav from "../components/BottomNav";

const initialItems: SaleItem[] = [
  { id: 1, name: "Amoxicillin 500mg", price: 12, quantity: 2 },
  { id: 2, name: "Paracetamol 500mg", price: 5.5, quantity: 1 },
  { id: 3, name: "Vitamin C 1000mg", price: 15.25, quantity: 3 },
];

const SalesPOS = () => {
  const [items, setItems] = useState<SaleItem[]>(initialItems);
  const [success, setSuccess] = useState(true);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="sales-container">
      {success && <SaleAlert onClose={() => setSuccess(false)} />}

      <SearchBar placeholder="Search medication or SKU..." />

      <div className="checkout-header">
        <h2>Checkout List</h2>
        <span>{items.length} ITEMS</span>
      </div>

      {items.map((item) => (
        <CheckoutItem
          key={item.id}
          item={item}
          onIncrease={() => updateQty(item.id, 1)}
          onDecrease={() => updateQty(item.id, -1)}
        />
      ))}

      <TotalsCard subtotal={subtotal} tax={tax} total={total} />

      <button className="confirm-btn">💵 Confirm Sale</button>

      <BottomNav />
    </div>
  );
};

export default SalesPOS;
