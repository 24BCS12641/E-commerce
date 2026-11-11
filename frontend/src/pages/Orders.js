import { useEffect, useState } from "react";
import api from "../services/api";

export default function Orders(){

 const [orders,setOrders] =
 useState([]);

 useEffect(()=>{
   loadOrders();
 },[]);

 const loadOrders =
 async()=>{

  const { data } =
   await api.get("/orders");

  setOrders(data);
 };

 const cancelOrder =
 async(id)=>{

  const ok =
   window.confirm(
    "Cancel this order?"
   );

  if(!ok) return;

  await api.delete(
   `/orders/${id}`
  );

  setOrders(
   orders.filter(
    item =>
    item._id !== id
   )
  );
 };

 return(
  <div className="orders-page">

   <h1>My Orders</h1>

   {orders.map(order=>(

    <div
     className="order-card"
     key={order._id}
    >

     <div className="order-top">

      <h3>
       Order #
       {order._id.slice(-6)}
      </h3>
      <a
              href={`http://localhost:5000/api/orders/invoice/${order._id}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="invoice-btn">
                Download Invoice
              </button>
            </a>

      <span className="status">
       Confirmed
      </span>

     </div>

     <p>
      Total:
      ₹{order.totalPrice}
     </p>

     <p>
      Payment:
      {order.paymentMethod}
     </p>

     <p>
      Address:
      {order.shippingAddress}
     </p>

     <button
      className="cancel-btn"
      onClick={()=>
       cancelOrder(
        order._id
       )
      }
     >
      Cancel Order
     </button>

    </div>

   ))}

  </div>
 )
}