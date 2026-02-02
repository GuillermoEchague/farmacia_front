interface Props {
  onClose: () => void;
}

const SaleAlert = ({ onClose }: Props) => (
  <div className="sale-alert">
    <div>
      <strong>✔ Sale Completed</strong>
      <p>The transaction has been processed successfully.</p>
    </div>
    <button onClick={onClose}>Dismiss ✕</button>
  </div>
);

export default SaleAlert;
