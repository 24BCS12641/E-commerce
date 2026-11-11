// frontend/src/components/Navbar.js

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {

  const navigate =
    useNavigate();

  const [search, setSearch] =
    useState("");

  const { cart } =
    useContext(CartContext);

  const {
    user,
    logout
  } =
    useContext(AuthContext);

  const submitSearch =
    (e) => {

      e.preventDefault();

      navigate(
        `/?search=${search}`
      );
    };

  const goCategory =
    (name) => {

      navigate(
        `/?category=${name}`
      );
    };

  return (
    <>

      {/* TOP NAVBAR */}
      <div className="amazon-nav">

        {/* LOGO */}
        <Link
          to="/"
          className="amazon-logo"
        >
          ShopZone
        </Link>

        {/* LOCATION */}
        <div className="amazon-location">

          <span>
            Deliver to
          </span>

          <strong>
            India
          </strong>

        </div>

        {/* SEARCH */}
        <form
          className="amazon-search"
          onSubmit={submitSearch}
        >

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <button type="submit">
            🔍
          </button>

        </form>

        {/* RIGHT MENU */}
        <div className="amazon-right">

          {!user ? (

            <>
              <Link to="/login">
                Sign In
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>

          ) : (

            <>
              <div className="amazon-user">

                <span>
                  Hello,
                </span>

                <strong>
                  {user.name}
                </strong>

              </div>

              {user.isAdmin && (

                <Link to="/admin">
                  Admin
                </Link>

              )}

              <Link to="/orders">
                Orders
              </Link>

              <button
                className="logout-btn"
                onClick={logout}
              >
                Logout
              </button>

            </>

          )}

          <Link
            to="/cart"
            className="amazon-cart"
          >
            Cart
            <span>
              {cart.length}
            </span>
          </Link>

        </div>

      </div>

      {/* BOTTOM MENU */}
      <div className="amazon-subnav">

        <button
          onClick={() =>
            goCategory("All")
          }
        >
          All
        </button>

        <button
          onClick={() =>
            goCategory("Mobiles")
          }
        >
          Mobiles
        </button>

        <button
          onClick={() =>
            goCategory("Fashion")
          }
        >
          Fashion
        </button>

        <button
          onClick={() =>
            goCategory("Electronics")
          }
        >
          Electronics
        </button>

        <button
          onClick={() =>
            goCategory("Home")
          }
        >
          Home
        </button>

        <button
          onClick={() =>
            goCategory("Beauty")
          }
        >
          Beauty
        </button>

      </div>

    </>
  );
}