import "./ShoppingIcon.styles.scss";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import Cart from "../Cart/Cart.component";
import { setIsCartOpen } from "../../reduxStore/Cart/CartAction";
import { useDispatch, useSelector } from "react-redux";
import {
  cartCountSelector,
  isCartOpenSelector,
} from "../../reduxStore/Cart/CartSelector";

const ShoppingCartIcon = () => {
  const dispatch = useDispatch();
  const handleCartToggle = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  const isCartOpen = useSelector(isCartOpenSelector);
  const cartCount = useSelector(cartCountSelector);
  return (
    <div className="cart-container">
      <button
        className="cart-icon-container"
        onClick={handleCartToggle}
        title="Shopping cart"
        type="button"
      >
        <img src={ShoppingIcon} alt="Shopping icon" className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
      </button>
      {isCartOpen && <Cart />}
    </div>
  );
};

export default ShoppingCartIcon;
