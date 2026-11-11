import { Link } from "react-router-dom";

export default function AdminDashboard(){

 return(
  <div className="container">

   <h1 style={{margin:"30px 0"}}>
    Admin Dashboard
   </h1>

   <div className="grid">

    <Link to="/admin/add-product">
      <div className="card">
        <h2>Add Product</h2>
      </div>
    </Link>

    <Link to="/admin/products">
      <div className="card">
        <h2>Manage Products</h2>
      </div>
    </Link>

    <Link to="/admin/orders">
      <div className="card">
        <h2>Orders</h2>
      </div>
    </Link>

    <Link to="/admin/users">
      <div className="card">
        <h2>Users</h2>
      </div>
    </Link>

   </div>

  </div>
 )
}