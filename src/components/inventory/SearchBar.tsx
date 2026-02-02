interface Props {
  value: string;
  onChange: (v: string) => void;
}

const SearchBar = ({ value, onChange }: Props) => (
  <input
    className="search"
    placeholder="Search products or categories..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBar;
