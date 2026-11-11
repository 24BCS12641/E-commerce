import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { getProduct } from "../services/productService";

export default function ProductDetails() {
  const { id } = useParams();

  const [product,setProduct]=useState({});

  useEffect(()=>{
    getProduct(id)
      .then(res=>setProduct(res.data));
  },[id]);

  return (
    <div style={{padding:"20px"}}>
      <img
        src={product.image}
        width="250"
        alt=""
      />

      <h1>{product.name}</h1>
      <h2>₹{product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
}