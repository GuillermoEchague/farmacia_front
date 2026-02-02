interface Props {
  value: "inventory" | "sales";
  onChange: (v: "inventory" | "sales") => void;
}

const ReportTypeSelector = ({ value, onChange }: Props) => (
  <div className="type-selector">
    <button
      className={value === "inventory" ? "active" : ""}
      onClick={() => onChange("inventory")}
    >
      📦 Inventory
    </button>
    <button
      className={value === "sales" ? "active" : ""}
      onClick={() => onChange("sales")}
    >
      💰 Sales
    </button>
  </div>
);

export default ReportTypeSelector;
