import { useState, useEffect } from "react";
import MobileLayout from "../components/MobileLayout";
import { getReports } from "../api/reports.service";
import { Link } from "react-router-dom";

interface ReportData {
  name: string;
  sku: string;
  stock: number;
  value: number;
}

const Reports = () => {
  const [reportType, setReportType] = useState("Inventory");
  const [data, setData] = useState<ReportData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getReports(reportType, "October 2023");
      setData(result);
    };
    fetchData();
  }, [reportType]);

  return (
    <MobileLayout>
      {/* TopAppBar */}
      <div className="flex items-center bg-white dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10">
        <div className="text-primary flex size-12 shrink-0 items-center cursor-pointer" onClick={() => window.history.back()}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Reports</h2>
      </div>

      <div className="flex flex-col gap-2 pb-32">
        {/* SectionHeader: Report Type */}
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Report Type</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Select the category for your data generation</p>
        </div>

        {/* SegmentedButtons */}
        <div className="flex px-4 py-2">
          <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-200/50 dark:bg-gray-800 p-1">
            <button
              onClick={() => setReportType("Inventory")}
              className={`flex h-full grow items-center justify-center rounded-lg px-2 text-sm font-semibold transition-all ${
                reportType === "Inventory" ? "bg-white dark:bg-gray-700 shadow-sm text-primary" : "text-[#637c88]"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                Inventory
              </span>
            </button>
            <button
              onClick={() => setReportType("Sales")}
              className={`flex h-full grow items-center justify-center rounded-lg px-2 text-sm font-semibold transition-all ${
                reportType === "Sales" ? "bg-white dark:bg-gray-700 shadow-sm text-primary" : "text-[#637c88]"
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">payments</span>
                Sales
              </span>
            </button>
          </div>
        </div>

        {/* SectionHeader: Select Period */}
        <div className="px-4 pt-6 pb-2">
          <h3 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Select Period</h3>
        </div>

        {/* CalendarPicker Mock */}
        <div className="mx-4 bg-white dark:bg-background-dark rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="flex flex-col gap-0.5 p-4">
            <div className="flex items-center p-1 justify-between mb-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <span className="material-symbols-outlined text-primary">chevron_left</span>
              </button>
              <p className="text-[#111518] dark:text-white text-base font-bold leading-tight flex-1 text-center">October 2023</p>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                <span className="material-symbols-outlined text-primary">chevron_right</span>
              </button>
            </div>
            <div className="grid grid-cols-7 text-center">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <p key={day} className="text-gray-400 text-[11px] font-bold uppercase tracking-wider py-2">{day}</p>
              ))}
              {/* Simplified Calendar Days */}
              {[27, 28, 29, 30, 1, 2, 3].map((d, i) => (
                <button key={i} className={`h-10 w-full text-sm ${d > 20 ? 'text-gray-300 dark:text-gray-600' : 'text-[#111518] dark:text-white font-medium'}`}>{d}</button>
              ))}
              <button className="h-10 w-full text-white bg-primary rounded-l-full text-sm font-bold">4</button>
              {[5, 6, 7, 8, 9].map(d => (
                <button key={d} className="h-10 w-full bg-primary/10 text-primary text-sm font-bold">{d}</button>
              ))}
              <button className="h-10 w-full text-white bg-primary rounded-r-full text-sm font-bold">10</button>
              {[11, 12, 13, 14].map(d => (
                <button key={d} className="h-10 w-full text-[#111518] dark:text-white text-sm font-medium">{d}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Data Preview Section */}
        <div className="px-4 pt-8 pb-2 flex justify-between items-end">
          <div>
            <h3 className="text-[#111518] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">Data Preview</h3>
            <p className="text-sm text-gray-500">Showing top 5 records</p>
          </div>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">Live Preview</span>
        </div>

        {/* Preview Table */}
        <div className="mx-4 mb-8 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                <tr>
                  <th className="px-4 py-3">Item Name</th>
                  <th className="px-4 py-3">SKU</th>
                  <th className="px-4 py-3 text-right">Stock</th>
                  <th className="px-4 py-3 text-right">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {data.map((item, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-semibold">{item.name}</td>
                    <td className="px-4 py-3 text-gray-500">{item.sku}</td>
                    <td className="px-4 py-3 text-right">{item.stock}</td>
                    <td className="px-4 py-3 text-right">${item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating Action Footer */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3 z-20">
        <Link
          to="/report-preview"
          className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all"
        >
          <span className="material-symbols-outlined">download</span>
          Export Full Report
        </Link>
        <div className="flex items-center justify-center gap-6">
          <button className="flex items-center gap-2 text-sm font-bold text-[#111518] dark:text-white px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
            PDF
          </button>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-700"></div>
          <button className="flex items-center gap-2 text-sm font-bold text-[#111518] dark:text-white px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span className="material-symbols-outlined text-green-600">table_chart</span>
            Excel
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Reports;
