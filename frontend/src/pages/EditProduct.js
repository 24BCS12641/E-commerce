
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        const p = res.data;

        setName(p.name || "");
        setPrice(p.price || "");
        setCategory(p.category || "");
        setImage(p.image || "");
        setDescription(p.description || "");
      } catch (err) {
        alert("Product not found");
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/products/${id}`, {
        name,
        price,
        category,
        image,
        description
      });

      alert("Updated");
      navigate("/admin/products");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-box" onSubmit={submit}>
        <h1>Edit Product</h1>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="auth-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
}
