import MobileLayout from "../components/MobileLayout";
import { APP_NAME } from "../config/constants";

const ReportPreview = () => {
  return (
    <MobileLayout showNav={false}>
      {/* Top Navigation Bar */}
      <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-[#dce2e5] dark:border-white/10 no-print">
        <div className="text-primary flex size-10 shrink-0 items-center justify-center cursor-pointer" onClick={() => window.history.back()}>
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Preview Report</h2>
        <div className="flex w-10 items-center justify-end">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      {/* Document Content */}
      <div className="flex flex-col flex-1 pb-32">
        {/* Report Title & Meta */}
        <div className="pt-6 px-4">
          <h3 className="text-[#111518] dark:text-white tracking-tight text-2xl font-extrabold leading-tight">{APP_NAME}</h3>
          <p className="text-[#637c88] dark:text-gray-400 text-sm font-medium pt-1">Internal Inventory Audit Report</p>
          <p className="text-[#637c88] dark:text-gray-400 text-xs font-normal pb-3 border-b border-[#dce2e5] dark:border-white/10">Generated on Oct 24, 2023 | 10:45 AM</p>
        </div>

        {/* Summary Stats */}
        <div className="flex flex-wrap gap-3 p-4">
          <div className="flex min-w-[120px] flex-1 flex-col gap-1 rounded-lg p-4 border border-[#dce2e5] dark:border-white/10 bg-white dark:bg-white/5">
            <p className="text-[#637c88] dark:text-gray-400 text-xs font-medium uppercase tracking-wider">Total Items</p>
            <p className="text-[#111518] dark:text-white text-xl font-bold leading-tight">1,240</p>
          </div>
          <div className="flex min-w-[120px] flex-1 flex-col gap-1 rounded-lg p-4 border border-red-100 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10">
            <p className="text-red-600 dark:text-red-400 text-xs font-medium uppercase tracking-wider">Low Stock</p>
            <p className="text-red-700 dark:text-red-300 text-xl font-bold leading-tight">12</p>
          </div>
        </div>
        <div className="px-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-lg p-4 border border-[#dce2e5] dark:border-white/10 bg-white dark:bg-white/5">
            <p className="text-[#637c88] dark:text-gray-400 text-xs font-medium uppercase tracking-wider">Total Valuation</p>
            <p className="text-primary text-xl font-extrabold leading-tight">$14,200.50</p>
          </div>
        </div>

        {/* Table Header */}
        <div className="flex items-center justify-between px-4 pb-2 pt-6">
          <h3 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Inventory Details</h3>
          <div className="text-primary flex items-center gap-1 cursor-pointer no-print">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            <span className="text-xs font-bold uppercase">Filter</span>
          </div>
        </div>

        {/* Table Content */}
        <div className="flex flex-col px-4">
          {[
            { name: "Amoxicillin 500mg", meta: "Antibiotics · SKU: 8842-1", badge: "Critical", stock: "5 units", color: "red" },
            { name: "Lisinopril 10mg", meta: "Cardiovascular · SKU: 4421-5", badge: "Optimal", stock: "120 units", color: "gray" },
            { name: "Paracetamol 500mg", meta: "Analgesics · SKU: 2210-9", badge: "Optimal", stock: "45 units", color: "gray" },
            { name: "Insulin Glargine", meta: "Endocrinology · SKU: 1102-X", badge: "Low Stock", stock: "12 units", color: "orange" },
            { name: "Atorvastatin 20mg", meta: "Cardiovascular · SKU: 3391-7", badge: "Optimal", stock: "215 units", color: "gray" },
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-[#dce2e5] dark:border-white/5">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#111518] dark:text-white font-bold text-sm">{row.name}</span>
                <span className="text-[#637c88] dark:text-gray-400 text-xs">{row.meta}</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                {row.badge !== "Optimal" && (
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                    row.color === "red" ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300" : "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300"
                  }`}>
                    {row.badge}
                  </span>
                )}
                <span className={`${row.badge !== "Optimal" ? (row.color === 'red' ? 'text-red-700 dark:text-red-400' : 'text-orange-700 dark:text-orange-400') : 'text-[#111518] dark:text-white'} font-extrabold text-sm`}>
                  {row.stock}
                </span>
                {row.badge === "Optimal" && <span className="text-[#637c88] dark:text-gray-400 text-[10px]">Optimal</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 pt-0 mt-8 flex justify-center items-center gap-2">
          <span className="text-[#637c88] dark:text-gray-400 text-xs font-medium">Page 1 of 8</span>
        </div>
      </div>

      {/* Sticky Footer Action */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-4 bg-white/80 dark:bg-[#1a262e]/80 backdrop-blur-md border-t border-[#dce2e5] dark:border-white/10 no-print z-20">
        <div className="flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl h-12 bg-primary text-white font-bold text-base transition-transform active:scale-95 shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">print</span>
            <span>Print Report</span>
          </button>
          <button className="flex size-12 items-center justify-center rounded-xl bg-[#f0f2f4] dark:bg-white/10 text-[#111518] dark:text-white transition-transform active:scale-95">
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ReportPreview;
