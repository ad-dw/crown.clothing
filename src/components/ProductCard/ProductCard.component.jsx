import { useContext } from "react";
import Button from "../Button/Button.coponent";
import "./ProductCard.styles.scss";
import { addCartItems } from "../../reduxStore/Cart/CartAction";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "../../reduxStore/Cart/CartSelector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  const handleAddItemToCart = () => {
    dispatch(addCartItems(product, cartItems));
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
