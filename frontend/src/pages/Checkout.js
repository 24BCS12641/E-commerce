import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { CartContext } from "../context/CartContext";

export default function Checkout() {

  const { cart, setCart } =
    useContext(CartContext);

  const navigate =
    useNavigate();

  const [name,setName] =
    useState("");

  const [address,setAddress] =
    useState("");

  const [paymentMethod,
    setPaymentMethod] =
    useState("COD");

  const subtotal =
    cart.reduce(
      (sum,item)=>
        sum + item.price,
      0
    );

  const tax =
    Math.round(
      subtotal * 0.18
    );

  const shipping =
    subtotal > 999 ? 0 : 99;

  const total =
    subtotal + tax + shipping;

  // ==========================
  // COD ORDER SAVE
  // ==========================
  const placeCODOrder =
    async()=>{

    try{

      await api.post(
        "/orders",
        {
          user:name,
          items:cart,
          totalPrice:total,
          paymentMethod:"COD",
          shippingAddress:address
        }
      );

      alert(
        "Order Placed Successfully"
      );

      setCart([]);

      navigate("/orders");

    }catch(err){

      alert(
        "Order Failed"
      );

    }
  };

  // ==========================
  // ONLINE PAYMENT
  // ==========================
  const payOnline =
    async()=>{

    try{

      const { data } =
        await api.post(
          "/payment/create-order",
          {
            amount: total
          }
        );

      const options = {

        key:
        "YOUR_RAZORPAY_KEY_ID",

        amount:
        data.amount,

        currency:
        data.currency,

        name:
        "ShopZone",

        description:
        "Online Payment",

        order_id:
        data.id,

        prefill:{
          name:name
        },

        notes:{
          address:address
        },

        handler:async function(){

          await api.post(
            "/orders",
            {
              user:name,
              items:cart,
              totalPrice:total,
              paymentMethod:"ONLINE",
              shippingAddress:address
            }
          );

          alert(
            "Payment Successful"
          );

          setCart([]);

          navigate("/orders");
        }

      };

      const razor =
        new window.Razorpay(
          options
        );

      razor.open();

    }catch(err){
 console.log(err);
 console.log(err.response?.data);
 alert(
   err.response?.data?.message ||
   "Order Failed"
 );
}
  };

  // ==========================
  // SUBMIT
  // ==========================
  const submitOrder = ()=>{

    if(!name || !address){

      alert(
        "Fill all fields"
      );

      return;
    }

    if(
      paymentMethod === "COD"
    ){
      placeCODOrder();
    }else{
      payOnline();
    }
  };

  return (
    <div className="checkout-page">

      <div className="checkout-left">

        <h1>Checkout</h1>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e)=>
            setName(
              e.target.value
            )
          }
        />

        <input
          placeholder="Address"
          value={address}
          onChange={(e)=>
            setAddress(
              e.target.value
            )
          }
        />

        <h3>
          Select Payment
        </h3>

        <div className="payment-list">

          <label className="payment-card">

            <input
              type="radio"
              checked={
                paymentMethod==="COD"
              }
              onChange={()=>
                setPaymentMethod(
                  "COD"
                )
              }
            />

            <span>
              Cash On Delivery
            </span>

          </label>

          <label className="payment-card">

            <input
              type="radio"
              checked={
                paymentMethod==="ONLINE"
              }
              onChange={()=>
                setPaymentMethod(
                  "ONLINE"
                )
              }
            />

            <span>
              Pay Online
            </span>

          </label>

        </div>

      </div>

      <div className="checkout-right">

        <div className="summary-box">

          <h2>Order Summary</h2>

          <div className="row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="row">
            <span>Tax</span>
            <span>₹{tax}</span>
          </div>

          <div className="row">
            <span>Shipping</span>
            <span>
              {shipping===0
                ? "Free"
                : `₹${shipping}`}
            </span>
          </div>

          <hr />

          <div className="row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={submitOrder}
          >
            {paymentMethod==="COD"
              ? "Place COD Order"
              : `Pay ₹${total}`}
          </button>

        </div>

      </div>

    </div>
  );
}