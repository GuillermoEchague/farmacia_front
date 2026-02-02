import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => (
  <div className="product">
    <div>
      <h3>
        {product.name}
        {product.lowStock && <span className="badge">LOW STOCK</span>}
      </h3>

      <p>
        Available:{" "}
        <strong className={product.lowStock ? "low" : ""}>
          {product.available} units
        </strong>
      </p>

      <p className={product.criticalExpiry ? "critical" : ""}>
        Exp: {product.expiry} • {product.category}
        {product.criticalExpiry && " (Critical)"}
      </p>
    </div>

    <div className="right">
      <span className="price">${product.price.toFixed(2)}</span>
      ✏️
    </div>
  </div>
);

export default ProductItem;
