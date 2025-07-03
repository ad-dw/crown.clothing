import Button from "../Button/Button.coponent";
import "./ProductCard.styles.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />
      <Button buttonType="inverted">Add to Cart</Button>
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
