import "./ShoppingIcon.styles.scss";
import ShoppingIcon from "../../assets/shopping-bag.svg";

const ShoppingCartIcon = () => {
  return (
    <div className="cart-icon-container" tabIndex="0">
      <img src={ShoppingIcon} alt="Shopping icon" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default ShoppingCartIcon;
