import React from "react";
import type { Product } from "../../types/product";

interface ProductItemProps {
  product: Product;
  onEdit?: (id: string) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onEdit }) => {
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'antibiotics': return 'medication';
      case 'blood pressure': return 'pill';
      case 'diabetes': return 'vaccines';
      case 'cholesterol': return 'fluid_med';
      case 'gastrointestinal': return 'health_and_safety';
      default: return 'medication';
    }
  };

  return (
    <div className="flex gap-4 bg-white dark:bg-background-dark px-4 py-4 justify-between border-b border-[#f0f3f4] dark:border-gray-800">
      <div className="flex items-start gap-4">
        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
          <span className="material-symbols-outlined">{getIcon(product.category)}</span>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex items-center gap-2">
            <p className="text-[#111518] dark:text-white text-base font-bold leading-tight">{product.name}</p>
            {product.status === 'low-stock' && (
              <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-200 uppercase">Low Stock</span>
            )}
          </div>
          <p className="text-[#637c88] text-sm font-medium leading-normal mt-1">
            Available: <span className={`${product.status === 'low-stock' ? 'text-amber-600 font-bold' : ''}`}>{product.stock} units</span>
          </p>
          <div className="flex items-center gap-2 text-[#637c88] text-xs font-normal">
            <span className={product.status === 'critical-expiry' ? 'text-red-500 font-semibold' : ''}>
              Exp: {product.expiryDate} {product.status === 'critical-expiry' && '(Critical)'}
            </span>
            <span>•</span>
            <span>{product.category}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button onClick={() => onEdit?.(product.id)} className="text-primary p-1 hover:bg-primary/5 rounded">
          <span className="material-symbols-outlined !text-[20px]">edit</span>
        </button>
        <p className="text-sm font-bold text-[#111518] dark:text-white">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
