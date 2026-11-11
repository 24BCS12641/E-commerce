import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";

import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/AdminProducts";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

import NotFound from "./pages/NotFound";
import AdminUsers from "./pages/AdminUsers";
import AuthProvider, {
  AuthContext
} from "./context/AuthContext";

import CartProvider from "./context/CartContext";

function AppRoutes() {

  const { user } =
    useContext(AuthContext);

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* PUBLIC */}
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* USER */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute user={user}>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute user={user}>
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
 path="/admin/users"
 element={
  <ProtectedRoute user={user}>
   <AdminUsers />
  </ProtectedRoute>
 }
/>

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute user={user}>
              <AdminProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-product"
          element={
            <ProtectedRoute user={user}>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute user={user}>
              <EditProduct />
            </ProtectedRoute>
          }
        />
        <Route
 path="/admin/edit/:id"
 element={
  <ProtectedRoute user={user}>
   <EditProduct />
  </ProtectedRoute>
 }
/>

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute user={user}>
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </AuthProvider>
  );
}