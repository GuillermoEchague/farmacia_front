interface Props {
  title: string;
  value: string;
  subtitle: string;
}

const AlertCard = ({ title, value, subtitle }: Props) => (
  <div className="card alert">
    <h4>{title}</h4>
    <h2>{value}</h2>
    <p className="alert-text">{subtitle}</p>
  </div>
);

export default AlertCard;
