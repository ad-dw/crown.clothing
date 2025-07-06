import { useContext } from "react";
import Button from "../Button/Button.coponent";
import "./ProductCard.styles.scss";
import { CartContext } from "../../context/Cart.context";

const ProductCard = ({ product }) => {
  const { addCartItems } = useContext(CartContext);
  const handleAddItemToCart = () => {
    addCartItems(product);
  };
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />
      <Button
        buttonType="inverted"
        onClick={handleAddItemToCart}
        aria-label={`Add ${product.name} to the cart`}
      >
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
