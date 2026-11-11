import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function AdminProducts(){

 const [products,setProducts] =
 useState([]);

 const loadProducts = async()=>{

   const res =
   await api.get("/products");

   setProducts(res.data);
 };

 useEffect(()=>{
   loadProducts();
 },[]);

 const deleteProduct = async(id,name) => {

  const confirmed = window.confirm(
    `Delete "${name}"?\n\nThis action cannot be undone.`
  );

  if(!confirmed) return;

  try{

    await api.delete(
      `/products/${id}`
    );

    alert("Product deleted successfully");

    loadProducts();

  }catch(err){
    alert("Delete failed");
  }
};

 return(
  <div className="container">

   <h1 style={{
    margin:"30px 0"
   }}>
    Manage Products
   </h1>

   <div className="admin-table">

    <table>

     <thead>
      <tr>
       <th>Name</th>
       <th>Price</th>
       <th>Category</th>
       <th>Actions</th>
      </tr>
     </thead>

     <tbody>

      {products.map(item=>(
       <tr key={item._id}>

        <td>{item.name}</td>

        <td>
         ₹{item.price}
        </td>

        <td>
         {item.category}
        </td>

        <td>

         <Link
          to={`/admin/edit/${item._id}`}
         >
          <button
           className="edit-btn"
          >
           Edit
          </button>
         </Link>

        <button
  className="delete-btn"
  onClick={() =>
    deleteProduct(
      item._id,
      item.name
    )
  }
>
  Delete
</button>

        </td>

       </tr>
      ))}

     </tbody>

    </table>

   </div>

  </div>
 )
}