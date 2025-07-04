import { useContext } from "react";
import Button from "../Button/Button.coponent";
import "./ProductCard.styles.scss";
import { CartContext } from "../../context/Cart.context";

const ProductCard = ({ product }) => {
  const { updateCartItems } = useContext(CartContext);
  const handleAddItemToCart = () => {
    console.log(product);
    updateCartItems(product);
  };
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />
      <Button buttonType="inverted" onClick={handleAddItemToCart}>
        Add to Cart
      </Button>
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
