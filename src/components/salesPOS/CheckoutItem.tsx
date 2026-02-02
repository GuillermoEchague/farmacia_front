import { SaleItem } from "../../types/sale";

interface Props {
  item: SaleItem;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CheckoutItem = ({ item, onIncrease, onDecrease }: Props) => (
  <div className="checkout-item">
    <div>
      <h3>{item.name}</h3>
      <p>${item.price.toFixed(2)} per unit</p>
    </div>

    <div className="qty">
      <button onClick={onDecrease}>−</button>
      <span>{item.quantity}</span>
      <button className="plus" onClick={onIncrease}>
        +
      </button>
    </div>
  </div>
);

export default CheckoutItem;
