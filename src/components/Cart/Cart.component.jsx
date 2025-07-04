import { useContext } from "react";
import Button from "../Button/Button.coponent";
import CartItem from "../CartItem/CartItem.component";
import "./Cart.styles.scss";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/Cart.context";

const Cart = () => {
  const navigate = useNavigate();
  const handleNavigateToCheckout = () => {
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      {cartItems.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <Button onClick={handleNavigateToCheckout}>Checkout</Button>
    </div>
  );
};

export default Cart;
