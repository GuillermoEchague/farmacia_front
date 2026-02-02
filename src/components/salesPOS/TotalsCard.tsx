interface Props {
  subtotal: number;
  tax: number;
  total: number;
}

const TotalsCard = ({ subtotal, tax, total }: Props) => (
  <div className="totals">
    <div>
      <span>Subtotal</span>
      <span>${subtotal.toFixed(2)}</span>
    </div>
    <div>
      <span>Tax (5%)</span>
      <span>${tax.toFixed(2)}</span>
    </div>
    <hr />
    <div className="total">
      <strong>Total</strong>
      <strong>${total.toFixed(2)}</strong>
    </div>
  </div>
);

export default TotalsCard;
