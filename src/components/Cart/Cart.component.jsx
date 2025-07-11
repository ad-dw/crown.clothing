import { useContext } from "react";
import Button from "../Button/Button.coponent";
import CartItem from "../CartItem/CartItem.component";
import "./Cart.styles.scss";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/Cart.context";
import EmptyCart from "../EmptyCart/EmptyCart.component";

const Cart = () => {
  const navigate = useNavigate();
  const { setIsCartOpen } = useContext(CartContext);
  const handleNavigateToCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };
  const trapFocusHandler = (event) => {
    if (event.key === "Tab") event.preventDefault();
  };
  const keyDownHandler = (event) => {
    if (event.key === "Escape") {
      setIsCartOpen(false);
      const target = document.querySelector(".cart-icon-container");
      target && target.focus();
    }
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container" onKeyDown={keyDownHandler}>
      {cartItems.length ? (
        <div className="cart-items-container">
          {cartItems.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <EmptyCart />
      )}
      <Button onClick={handleNavigateToCheckout} onKeyDown={trapFocusHandler}>
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
