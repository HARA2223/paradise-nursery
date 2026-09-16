import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartItem.css';
import { removeItem, updateQuantity } from './CartSlice.jsx';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateItemSubtotal = (item) => item.price * item.quantity;

  const calculateTotalAmount = () =>
    cartItems.reduce((total, item) => total + calculateItemSubtotal(item), 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-page">
      <h2 className="cart-page__title">Your Shopping Cart</h2>

      <p className="cart-page__total">
        Total Cart Amount: <strong>${calculateTotalAmount().toFixed(2)}</strong>
      </p>

      {cartItems.length === 0 ? (
        <p className="cart-page__empty">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img
                className="cart-item__thumbnail"
                src={item.image}
                alt={item.name}
                width="90"
                height="90"
              />

              <div className="cart-item__details">
                <h3 className="cart-item__name">{item.name}</h3>
                <p className="cart-item__unit-price">Unit price: ${item.price}</p>
                <p className="cart-item__subtotal">
                  Item total: ${calculateItemSubtotal(item).toFixed(2)}
                </p>
              </div>

              <div className="cart-item__quantity">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>

              <button
                className="cart-item__delete"
                onClick={() => handleDelete(item)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-page__actions">
        <button className="cart-page__continue" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button
          className="cart-page__checkout"
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
