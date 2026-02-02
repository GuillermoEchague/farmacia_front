import { ReportRow } from "../../types/report";

interface Props {
  rows: ReportRow[];
}

const DataPreviewTable = ({ rows }: Props) => (
  <div className="table">
    <div className="table-header">
      <span>Item Name</span>
      <span>SKU</span>
      <span>Stock</span>
      <span>Value</span>
    </div>

    {rows.map((r) => (
      <div key={r.sku} className="table-row">
        <span>{r.name}</span>
        <span>{r.sku}</span>
        <span>{r.stock}</span>
        <span>${r.value}</span>
      </div>
    ))}
  </div>
);

export default DataPreviewTable;
