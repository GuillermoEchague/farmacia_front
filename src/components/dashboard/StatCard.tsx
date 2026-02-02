interface Props {
  title: string;
  value: string;
  change: string;
}

const StatCard = ({ title, value, change }: Props) => (
  <div className="card">
    <h4>{title}</h4>
    <h2>{value}</h2>
    <p className="positive">{change}</p>
  </div>
);

export default StatCard;
