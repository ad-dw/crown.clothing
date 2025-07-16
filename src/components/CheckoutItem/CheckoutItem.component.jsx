import "./CheckoutItem.styles.scss";
import {
  addCartItems,
  clearCartItem,
  removeCartItems,
} from "../../reduxStore/Cart/CartAction";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsSelector } from "../../reduxStore/Cart/CartSelector";

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;

  const cartItems = useSelector(cartItemsSelector);
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addCartItems(item, cartItems));
  const removeItemHandler = () => dispatch(removeCartItems(item, cartItems));
  const clearItemHandler = () => dispatch(clearCartItem(item, cartItems));
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span onClick={removeItemHandler} className="arrow">
          &#10094;
        </span>
        <span className="value"> {quantity}</span>
        <span onClick={addItemHandler} className="arrow">
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
