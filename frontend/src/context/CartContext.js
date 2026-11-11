import {
  createContext,
  useState
} from "react";

export const CartContext =
  createContext();

export default function CartProvider({
  children
}) {
  const [cart, setCart] = useState(
    JSON.parse(
      localStorage.getItem("cart")
    ) || []
  );

  const addToCart = (item) => {
    const updated = [...cart, item];

    setCart(updated);

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );
  };

  const removeFromCart = (id) => {
    const updated = cart.filter(
      item => item._id !== id
    );

    setCart(updated);

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}