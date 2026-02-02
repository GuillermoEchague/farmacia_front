import "../styles/reportPreview.css";
import ReportHeader from "../components/reportPreview/ReportHeader";
import ReportSummary from "../components/reportPreview/ReportSummary";
import InventoryDetailItem from "../components/reportPreview/InventoryDetailItem";
import PrintActions from "../components/reportPreview/PrintActions";
import ReportFooter from "../components/reportPreview/ReportFooter";
import { InventoryDetail } from "../types/reportPreview";

const mockDetails: InventoryDetail[] = [
  {
    id: 1,
    name: "Amoxicillin 500mg",
    category: "Antibiotics",
    sku: "8842-1",
    units: 5,
    status: "critical",
  },
  {
    id: 2,
    name: "Lisinopril 10mg",
    category: "Cardiovascular",
    sku: "4421-5",
    units: 120,
    status: "optimal",
  },
  {
    id: 3,
    name: "Paracetamol 500mg",
    category: "Analgesics",
    sku: "2210-9",
    units: 45,
    status: "optimal",
  },
  {
    id: 4,
    name: "Insulin Glargine",
    category: "Endocrinology",
    sku: "1102-X",
    units: 12,
    status: "low",
  },
  {
    id: 5,
    name: "Atorvastatin 20mg",
    category: "Cardiovascular",
    sku: "3391-7",
    units: 215,
    status: "optimal",
  },
];

const ReportPreview = () => {
  return (
    <div className="preview-container">
      <ReportHeader />

      <ReportSummary />

      <section className="details">
        <div className="details-header">
          <h2>Inventory Details</h2>
          <button className="link">≡ Filter</button>
        </div>

        {mockDetails.map((item) => (
          <InventoryDetailItem key={item.id} item={item} />
        ))}
      </section>

      <ReportFooter page="Page 1 of 8" />

      <PrintActions />
    </div>
  );
};

export default ReportPreview;
