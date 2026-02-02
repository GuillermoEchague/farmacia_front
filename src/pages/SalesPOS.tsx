import { useState } from "react";
import MobileLayout from "../components/MobileLayout";
import CheckoutItem from "../components/salesPOS/CheckoutItem";

const SalesPOS = () => {
  const [items, setItems] = useState([
    { id: "1", name: "Amoxicillin 500mg", price: 12.00, quantity: 2 },
    { id: "2", name: "Paracetamol 500mg", price: 5.50, quantity: 1 },
    { id: "3", name: "Vitamin C 1000mg", price: 15.25, quantity: 3 },
  ]);

  const [saleCompleted, setSaleCompleted] = useState(false);

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter(item => item.quantity > 0));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleConfirmSale = () => {
    setSaleCompleted(true);
    setTimeout(() => setSaleCompleted(false), 5000);
  };

  return (
    <MobileLayout showNav={false}>
      {/* Success Toast */}
      {saleCompleted && (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 p-4 animate-in fade-in slide-in-from-top duration-300">
          <div className="flex flex-1 items-center justify-between gap-4 rounded-xl border border-[#dce2e5] dark:border-[#2a3942] bg-success/10 backdrop-blur-md p-4 shadow-lg border-l-4 border-l-success">
            <div className="flex items-center gap-3">
              <div className="text-success material-symbols-outlined">check_circle</div>
              <div className="flex flex-col gap-0.5">
                <p className="text-success text-sm font-bold leading-tight">Sale Completed</p>
                <p className="text-[#637c88] dark:text-[#a1b3bc] text-xs font-normal leading-normal">The transaction has been processed successfully.</p>
              </div>
            </div>
            <button onClick={() => setSaleCompleted(false)} className="text-xs font-bold leading-normal flex items-center gap-1 text-[#111518] dark:text-white">
              Dismiss
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        </div>
      )}

      {/* Top Header */}
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pt-16 pb-2 justify-between sticky top-0 z-10">
        <div className="text-[#111518] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#1c2a33] shadow-sm cursor-pointer" onClick={() => window.history.back()}>
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">New Sale</h2>
        <div className="flex w-10 items-center justify-end">
          <p className="text-primary text-sm font-bold leading-normal tracking-[0.015em] shrink-0 cursor-pointer" onClick={() => setItems([])}>Clear</p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <label className="flex flex-col min-w-40 h-14 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
            <div className="text-[#637c88] flex border-none bg-white dark:bg-[#1c2a33] items-center justify-center pl-4 rounded-l-xl">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 rounded-r-xl text-[#111518] dark:text-white focus:outline-0 focus:ring-0 border-none bg-white dark:bg-[#1c2a33] h-full placeholder:text-[#637c88] px-4 pl-2 text-base font-normal leading-normal" placeholder="Search medication or SKU..."/>
          </div>
        </label>
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <h3 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Checkout List</h3>
        <span className="text-[#637c88] text-xs font-medium uppercase tracking-wider">{items.length} Items</span>
      </div>

      {/* List Items (Cart) */}
      <div className="flex flex-col gap-1 px-4 mb-60">
        {items.map(item => (
          <CheckoutItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => updateQuantity(item.id, 1)}
            onDecrease={() => updateQuantity(item.id, -1)}
          />
        ))}
        {items.length === 0 && (
          <div className="p-12 text-center text-gray-400">Your cart is empty</div>
        )}
      </div>

      {/* Footer Checkout Panel */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white dark:bg-[#1c2a33] p-4 pb-8 rounded-t-3xl shadow-[0_-8px_30px_rgb(0,0,0,0.08)] border-t border-[#f0f3f4] dark:border-[#2a3942] z-20">
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex items-center justify-between text-sm">
            <p className="text-[#637c88] dark:text-[#a1b3bc]">Subtotal</p>
            <p className="text-[#111518] dark:text-white font-medium">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p className="text-[#637c88] dark:text-[#a1b3bc]">Tax (5%)</p>
            <p className="text-[#111518] dark:text-white font-medium">${tax.toFixed(2)}</p>
          </div>
          <div className="h-[1px] bg-[#f0f3f4] dark:bg-[#2a3942] w-full"></div>
          <div className="flex items-center justify-between">
            <p className="text-[#111518] dark:text-white text-lg font-bold">Total</p>
            <p className="text-primary text-2xl font-extrabold tracking-tight">${total.toFixed(2)}</p>
          </div>
        </div>
        <button
          onClick={handleConfirmSale}
          disabled={items.length === 0}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] active:brightness-90 transition-all shadow-lg shadow-primary/30 disabled:opacity-50"
        >
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined">payments</span>
            Confirm Sale
          </span>
        </button>
      </div>
    </MobileLayout>
  );
};

export default SalesPOS;
