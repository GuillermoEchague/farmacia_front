import { InventoryDetail } from "../../types/reportPreview";

interface Props {
  item: InventoryDetail;
}

const InventoryDetailItem = ({ item }: Props) => {
  const statusMap = {
    optimal: "Optimal",
    low: "Low Stock",
    critical: "Critical",
  };

  return (
    <div className="detail-item">
      <div>
        <h3>{item.name}</h3>
        <p>
          {item.category} · SKU: {item.sku}
        </p>
      </div>

      <div className={`status ${item.status}`}>
        <span>{statusMap[item.status]}</span>
        <strong>{item.units} units</strong>
      </div>
    </div>
  );
};

export default InventoryDetailItem;
