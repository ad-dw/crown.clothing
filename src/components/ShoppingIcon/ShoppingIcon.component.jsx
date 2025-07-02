import "./ShoppingIcon.styles.scss";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import Cart from "../Cart/Cart.component";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

const ShoppingCartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-container">
      <button
        className="cart-icon-container"
        onClick={handleCartToggle}
        title="Shopping cart"
      >
        <img src={ShoppingIcon} alt="Shopping icon" className="shopping-icon" />
        <span className="item-count">0</span>
      </button>
      {isCartOpen && <Cart />}
    </div>
  );
};

export default ShoppingCartIcon;
