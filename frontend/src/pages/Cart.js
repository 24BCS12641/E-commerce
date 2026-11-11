// frontend/src/pages/Cart.js

import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty
  } = useContext(CartContext);

  const subtotal =
    cart.reduce(
      (sum, item) =>
        sum + item.price * (item.qty || 1),
      0
    );

  const tax =
    Math.round(subtotal * 0.18);

  const shipping =
    subtotal > 999 ? 0 : 99;

  const total =
    subtotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Your Cart is Empty</h1>
        <p>Add products to continue shopping.</p>

        <Link
          to="/"
          className="continue-btn"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* LEFT */}
      <div className="cart-left">

        <h1>
          Shopping Cart
        </h1>

        {cart.map(item => (

          <div
            className="cart-card"
            key={item._id}
          >

            <img
              src={
                item.image?.startsWith("http")
                  ? item.image
                  : `http://localhost:5000${item.image}`
              }
              alt={item.name}
              className="cart-img"
            />

            <div className="cart-info">

              <h3>
                {item.name}
              </h3>

              <p className="stock">
                In Stock
              </p>

              <div className="cart-price">
                ₹{item.price}
              </div>

              <div className="qty-box">

                <button
                  onClick={() =>
                    decreaseQty(item._id)
                  }
                >
                  -
                </button>

                <span>
                  {item.qty || 1}
                </span>

                <button
                  onClick={() =>
                    increaseQty(item._id)
                  }
                >
                  +
                </button>

              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromCart(item._id)
                }
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* RIGHT */}
      <div className="cart-right">

        <div className="summary-box">

          <h2>
            Order Summary
          </h2>

          <div className="sum-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="sum-row">
            <span>Tax</span>
            <span>₹{tax}</span>
          </div>

          <div className="sum-row">
            <span>Shipping</span>
            <span>
              {shipping === 0
                ? "Free"
                : `₹${shipping}`}
            </span>
          </div>

          <hr />

          <div className="sum-row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <Link
            to="/checkout"
            className="checkout-btn"
          >
            Proceed to Checkout
          </Link>

        </div>

      </div>

    </div>
  );
}