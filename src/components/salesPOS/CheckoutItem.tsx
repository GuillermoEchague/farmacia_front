import React from "react";

interface CheckoutItemProps {
  name: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ name, price, quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-[#1c2a33] px-4 min-h-[80px] py-3 justify-between rounded-xl shadow-sm border border-[#f0f3f4] dark:border-[#2a3942]">
      <div className="flex flex-col justify-center">
        <p className="text-[#111518] dark:text-white text-base font-bold leading-normal line-clamp-1">{name}</p>
        <p className="text-[#637c88] dark:text-[#a1b3bc] text-sm font-normal leading-normal">${price.toFixed(2)} per unit</p>
      </div>
      <div className="shrink-0">
        <div className="flex items-center gap-3 bg-background-light dark:bg-background-dark p-1 rounded-lg">
          <button
            onClick={onDecrease}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-[#1c2a33] text-[#111518] dark:text-white shadow-sm hover:bg-gray-50 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-lg">remove</span>
          </button>
          <span className="text-base font-bold leading-normal w-6 text-center dark:text-white">
            {quantity}
          </span>
          <button
            onClick={onIncrease}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-lg">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
