import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ item }) => {
  const { addCartItems, removeCartItems, clearCartItem } =
    useContext(CartContext);
  const { name, quantity, price, imageUrl } = item;

  const addItemHandler = () => addCartItems(item);
  const removeItemHandler = () => removeCartItems(item);
  const clearItemHandler = () => clearCartItem(item);
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
