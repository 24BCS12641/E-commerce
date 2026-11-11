import {
  useEffect,
  useState,
  useContext
} from "react";

import {
  useLocation
} from "react-router-dom";

import {
  CartContext
} from "../context/CartContext";

import api from "../services/api";

export default function Home() {

  const [products, setProducts] =
    useState([]);

  const [filtered, setFiltered] =
    useState([]);

  const { addToCart } =
    useContext(CartContext);

  const location =
    useLocation();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts =
    async () => {

      try {

        const res =
          await api.get(
            "/products"
          );

        setProducts(
          res.data
        );

        setFiltered(
          res.data
        );

      } catch (err) {

        console.log(err);

      }
    };

  useEffect(() => {

    const params =
      new URLSearchParams(
        location.search
      );

    const category =
      params.get(
        "category"
      );

    const search =
      params.get(
        "search"
      );

    let data =
      [...products];

    if (
      category &&
      category !== "All"
    ) {

      data =
        data.filter(
          item =>
            item.category
              ?.toLowerCase()
              .includes(
                category.toLowerCase()
              )
        );
    }

    if (search) {

      data =
        data.filter(
          item =>
            item.name
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              )
        );
    }

    setFiltered(data);

  }, [
    location.search,
    products
  ]);

  return (
    <div className="container">

      {/* HERO SECTION */}
      <div className="hero-banner">

        <div className="hero-overlay">

          <h1>
            Big Festival Sale
          </h1>

          <p>
            Up to 70% off on top brands
          </p>

          <button>
            Shop Now
          </button>

        </div>

      </div>

      {/* TITLE */}
      <div className="section">

        <h2>
          {filtered.length}
          {" "}
          Products Found
        </h2>

      </div>

      {/* PRODUCTS */}
      <div className="products-grid">

        {filtered.map(item => (

          <div
            className="amazon-card"
            key={item._id}
          >

            <div className="amazon-img-box">

              <img
                className="amazon-img"
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : `http://localhost:5000${item.image}`
                }
                alt={item.name}
              />

            </div>

            <div className="amazon-body">

              <p className="amazon-brand">
                {item.category}
              </p>

              <h3 className="amazon-title">
                {item.name}
              </h3>

              <div className="amazon-rating">
                ★★★★☆
                <span>
                  1,284
                </span>
              </div>

              <div className="amazon-price-row">

                <span className="amazon-symbol">
                  ₹
                </span>

                <span className="amazon-price">
                  {item.price}
                </span>

              </div>

              <p className="amazon-delivery">
                FREE delivery by tomorrow
              </p>

              <button
                className="amazon-btn"
                onClick={() =>
                  addToCart(item)
                }
              >
                Add to Cart
              </button>

              <button
                className="amazon-buy"
                onClick={() =>
                  addToCart(item)
                }
              >
                Buy Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}