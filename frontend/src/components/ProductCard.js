import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({
  product
}) {
  const { addToCart } =
    useContext(CartContext);

  return (
    <div style={{
      border:"1px solid #ddd",
      borderRadius:"10px",
      padding:"15px"
    }}>
      <img
        src={product.image}
        width="180"
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <Link to={`/product/${product._id}`}>
        View Details
      </Link>

      <br /><br />

      <button
        onClick={() =>
          addToCart(product)
        }
      >
        Add To Cart
      </button>
    </div>
  );
}