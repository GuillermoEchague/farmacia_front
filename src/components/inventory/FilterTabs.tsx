interface Props {
  active: string;
  onChange: (v: string) => void;
}

const FilterTabs = ({ active, onChange }: Props) => (
  <div className="filters">
    <button
      className={active === "all" ? "active" : ""}
      onClick={() => onChange("all")}
    >
      All Items
    </button>
    <button
      className={active === "low" ? "active warning" : "warning"}
      onClick={() => onChange("low")}
    >
      Low Stock
    </button>
    <button
      className={active === "expiry" ? "active" : ""}
      onClick={() => onChange("expiry")}
    >
      Near Expiry
    </button>
  </div>
);

export default FilterTabs;
