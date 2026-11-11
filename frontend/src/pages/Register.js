import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {

  const navigate =
    useNavigate();

  const [name,setName] =
    useState("");

  const [email,setEmail] =
    useState("");

  const [password,setPassword] =
    useState("");

  const [loading,setLoading] =
    useState(false);

  const submitHandler =
    async(e)=>{

      e.preventDefault();

      try{

        setLoading(true);

        await api.post(
          "/users/register",
          {
            name,
            email,
            password
          }
        );

        alert(
          "Account Created Successfully"
        );

        navigate("/login");

      }catch(error){

        alert(
          error.response?.data?.message ||
          "Register Failed"
        );

      }finally{
        setLoading(false);
      }
    };

  return (
    <div className="register-page">

      {/* LEFT */}
      <div className="register-left">

        <div className="register-brand">

          <h1>
            ShopZone
          </h1>

          <p>
            Join thousands of shoppers.
            Buy premium products with
            secure checkout.
          </p>

          <ul>
            <li>✔ Fast Delivery</li>
            <li>✔ Secure Payments</li>
            <li>✔ Premium Brands</li>
          </ul>

        </div>

      </div>

      {/* RIGHT */}
      <div className="register-right">

        <form
          className="register-card"
          onSubmit={submitHandler}
        >

          <h2>
            Create Account
          </h2>

          <p>
            Register to start shopping
          </p>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>
              setName(e.target.value)
            }
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
            required
          />

          <button
            className="register-btn"
            type="submit"
          >
            {loading
              ? "Please Wait..."
              : "Register"}
          </button>

          <div className="register-links">

            <span>
              Already have account?
            </span>

            <Link to="/login">
              Login
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}