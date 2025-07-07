import { useContext } from "react";
import "./CheckoutPage.styles.scss";
import { CartContext } from "../../context/Cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import EmptyCart from "../../components/EmptyCart/EmptyCart.component";

const CheckoutPage = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  console.log(cartItems);
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
