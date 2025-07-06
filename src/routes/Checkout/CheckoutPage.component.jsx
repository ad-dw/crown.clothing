import { useContext } from "react";
import "./CheckoutPage.styles.scss";
import { CartContext } from "../../context/Cart.context";

const CheckoutPage = () => {
  const { cartItems, addCartItems, removeCartItems } = useContext(CartContext);
  return cartItems.map((ele) => {
    return (
      <div key={ele.id}>
        <img src={ele.imageUrl} alt={ele.name} />
        <div>
          <div>{ele.name}</div>
          <div>{ele.quantity}</div>
          <div onClick={() => addCartItems(ele)}>increment</div>
          <div onClick={() => removeCartItems(ele)}>decrement</div>
        </div>
      </div>
    );
  });
};

export default CheckoutPage;
