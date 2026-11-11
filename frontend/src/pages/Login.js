// frontend/src/pages/Login.js

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

  const navigate =
    useNavigate();

  const { login } =
    useContext(AuthContext);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const submitHandler =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const { data } =
          await api.post(
            "/users/login",
            {
              email,
              password
            }
          );

        login(data);

        navigate("/");

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Login failed"
        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="login-brand">

          <h1>
            ShopZone
          </h1>

          <p>
            Premium shopping experience with
            fast delivery, secure payments
            and top brands.
          </p>

          <ul>
            <li>
              ✔ Secure Checkout
            </li>

            <li>
              ✔ Fast Delivery
            </li>

            <li>
              ✔ 24/7 Support
            </li>
          </ul>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <form
          className="login-card"
          onSubmit={submitHandler}
        >

          <h2>
            Welcome Back
          </h2>

          <p>
            Login to continue shopping
          </p>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          <button
            type="submit"
            className="login-btn"
          >
            {loading
              ? "Please Wait..."
              : "Login"}
          </button>

          <div className="login-links">

            <span>
              New User?
            </span>

            <Link to="/register">
              Create Account
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}