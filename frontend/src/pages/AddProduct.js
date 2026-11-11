import { useState } from "react";
import api from "../services/api";

export default function AddProduct(){

 const [name,setName]=useState("");
 const [price,setPrice]=useState("");
 const [category,setCategory]=useState("");
 const [description,setDescription]=useState("");
 const [image,setImage]=useState("");
 const [loading,setLoading]=useState(false);

 const uploadFile = async(e)=>{

  const file = e.target.files[0];

  const formData = new FormData();

  formData.append("image",file);

  setLoading(true);

  try{

   const res = await api.post(
    "/upload",
    formData,
    {
      headers:{
        "Content-Type":
        "multipart/form-data"
      }
    }
   );

   setImage(res.data.image);

  }catch(err){
   alert("Upload failed");
  }

  setLoading(false);
 };

 const submit = async(e)=>{
  e.preventDefault();

  await api.post("/products",{
   name,
   price,
   category,
   description,
   image
  });

  alert("Product Added");
 };

 return(
  <div className="auth-page">

   <form
    className="auth-box"
    onSubmit={submit}
   >

    <h1>Add Product</h1>

    <input
     placeholder="Name"
     onChange={e=>setName(e.target.value)}
    />

    <input
     placeholder="Price"
     onChange={e=>setPrice(e.target.value)}
    />

    <input
     placeholder="Category"
     onChange={e=>setCategory(e.target.value)}
    />

    <input
     placeholder="Description"
     onChange={e=>setDescription(e.target.value)}
    />

    <input
     type="file"
     onChange={uploadFile}
    />

    {loading && <p>Uploading...</p>}

    {image && (
      <img
       src={`http://localhost:5000${image}`}
       alt=""
       width="120"
      />
    )}

    <button className="auth-btn">
      Add Product
    </button>

   </form>

  </div>
 )
}