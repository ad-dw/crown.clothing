import "./EmptyCart.styles.scss";
import ShoppingIcon from "../../assets/shopping-bag.svg";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <img src={ShoppingIcon} alt="Shopping icon" className="empty-cart-icon" />
      <div className="empty-cart-message">
        You have nothing in your cart. Add some products to checkout
      </div>
    </div>
  );
};

export default EmptyCart;
