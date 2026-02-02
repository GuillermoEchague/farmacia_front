import { useState, useEffect } from "react";
import MobileLayout from "../components/MobileLayout";
import ProductItem from "../components/inventory/ProductItem";
import { getProducts } from "../api/inventory.service";
import type { Product } from "../types/product";

const Inventory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MobileLayout>
      {/* Header / TopAppBar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-[#e5e7eb] dark:border-gray-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div className="flex items-center gap-2">
            <div className="text-[#111518] dark:text-white flex size-10 shrink-0 items-center justify-center">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
            <h2 className="text-[#111518] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Inventory</h2>
          </div>
          <div className="flex items-center justify-end">
            <button className="flex h-10 items-center justify-center rounded-lg bg-primary text-white px-4 gap-2 text-sm font-bold leading-normal transition-colors hover:bg-primary/90">
              <span className="material-symbols-outlined !text-[20px]">add</span>
              <span>Product</span>
            </button>
          </div>
        </div>
        {/* SearchBar */}
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-11 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#637c88] flex border-none bg-[#f0f3f4] dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="flex w-full min-w-0 flex-1 rounded-r-lg text-[#111518] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] dark:bg-gray-800 h-full placeholder:text-[#637c88] px-4 pl-2 text-base font-normal leading-normal"
                placeholder="Search products or categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </label>
        </div>
        {/* Chips / Filters */}
        <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4">
            <p className="text-xs font-semibold">All Items</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 px-4 border border-amber-200 dark:border-amber-800">
            <span className="material-symbols-outlined !text-[16px]">warning</span>
            <p className="text-xs font-semibold">Low Stock</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f3f4] dark:bg-gray-800 text-[#111518] dark:text-gray-300 px-4">
            <p className="text-xs font-semibold">Near Expiry</p>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Summary Bar */}
        <div className="px-4 py-2 bg-background-light dark:bg-background-dark/50">
          <p className="text-xs font-semibold text-[#637c88] uppercase tracking-wider">
            Total Products: {products.length}
          </p>
        </div>

        {/* List Items */}
        <div className="flex flex-col">
          {loading ? (
            <div className="p-8 text-center">Loading inventory...</div>
          ) : (
            filteredProducts.map(product => (
              <ProductItem key={product.id} product={product} />
            ))
          )}
        </div>

        <div className="p-8 text-center opacity-40">
          <p className="text-xs">End of inventory list</p>
        </div>
      </main>
    </MobileLayout>
  );
};

export default Inventory;
