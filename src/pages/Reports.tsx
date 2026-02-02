import { useState } from "react";
import "../styles/reports.css";
import { ReportRow } from "../types/report";
import ReportTypeSelector from "../components/reports/ReportTypeSelector";
import PeriodSelector from "../components/reports/PeriodSelector";
import DataPreviewTable from "../components/reports/DataPreviewTable";
import ExportActions from "../components/reports/ExportActions";

const mockData: ReportRow[] = [
  { name: "Amoxicillin 500mg", sku: "AMX-001", stock: 450, value: 1240 },
  { name: "Lisinopril 10mg", sku: "LIS-042", stock: 120, value: 850 },
  { name: "Metformin 850mg", sku: "MET-850", stock: 89, value: 430 },
  { name: "Atorvastatin 20mg", sku: "ATR-201", stock: 312, value: 2100 },
  { name: "Ibuprofen 400mg", sku: "IBU-400", stock: 1200, value: 310 },
];

const Reports = () => {
  const [type, setType] = useState<"inventory" | "sales">("inventory");

  return (
    <div className="reports-container">
      <header className="reports-header">
        ← <h1>Reports</h1>
      </header>

      <section>
        <h3>Report Type</h3>
        <p>Select the category for your data generation</p>
        <ReportTypeSelector value={type} onChange={setType} />
      </section>

      <section>
        <h3>Select Period</h3>
        <PeriodSelector />
      </section>

      <section>
        <div className="preview-header">
          <div>
            <h3>Data Preview</h3>
            <p>Showing top 5 of 124 records</p>
          </div>
          <button className="link">Live Preview</button>
        </div>

        <DataPreviewTable rows={mockData} />
      </section>

      <ExportActions />
    </div>
  );
};

export default Reports;
