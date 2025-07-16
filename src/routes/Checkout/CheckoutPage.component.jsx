import "./CheckoutPage.styles.scss";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import EmptyCart from "../../components/EmptyCart/EmptyCart.component";
import { useSelector } from "react-redux";
import {
  cartItemsSelector,
  cartTotalSelector,
} from "../../reduxStore/Cart/CartSelector";

const CheckoutPage = () => {
  const cartItems = useSelector(cartItemsSelector);
  const totalAmount = useSelector(cartTotalSelector);
  return cartItems.length ? (
    <div className="checkout-container">
      {cartItems.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}
      <div className="total">Total ${totalAmount}</div>
    </div>
  ) : (
    <EmptyCart />
  );
};

export default CheckoutPage;
