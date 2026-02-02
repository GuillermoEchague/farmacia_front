export const getReports = async (type: string, period: string) => {
  console.log(`Fetching ${type} reports for ${period}`);
  await new Promise(resolve => setTimeout(resolve, 400));

  return [
    { name: "Amoxicillin 500mg", sku: "AMX-001", stock: 450, value: 1240 },
    { name: "Lisinopril 10mg", sku: "LIS-042", stock: 120, value: 850 },
    { name: "Metformin 850mg", sku: "MET-850", stock: 89, value: 430 },
    { name: "Atorvastatin 20mg", sku: "ATR-201", stock: 312, value: 2100 },
    { name: "Ibuprofen 400mg", sku: "IBU-400", stock: 1200, value: 310 }
  ];
};
