import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import AuthLayout from "./AuthLayout";


// Pages
import Home from "@/Pages/Home/Home";
import Support from "@/Pages/Support/Support";
import About from "@/Pages/About/About";
import Products from "@/Pages/Products/Products";
import ProductDetails from "@/Pages/Products/ProductDetails";
import Cart from "@/Pages/Cart/Cart";
import Checkout from "@/Pages/Checkout/Checkout";
import Payment from "@/Pages/Payment/Payment";


// Auth Pages
import Login from "@/auth/Login/Login";
import Register from "@/auth/Register/Register";
import Contact from "@/Pages/Contact/Contact";
import Wishlist from "@/Pages/Wishlist/Wishlist";



export const router = createBrowserRouter([
  // App Layout
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },     
      { path: "/products", element: <Products /> },
      { path: "/products/:id", element: <ProductDetails /> },
      { path: "/support", element: <Support /> },
      { path: "/contact", element: <Contact /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/payment", element: <Payment /> },
    //   {
    //     path: "/profile",
    //     element: (
    //       <ProtectedRoute>
    //         <Profile />
    //       </ProtectedRoute>
    //     ),
    //   },
    //   {
    //     path: "/profile/edit",
    //     element: (
    //       <ProtectedRoute>
    //         <EditProfile />
    //       </ProtectedRoute>
    //     ),
    //   },
    ],
  },

  // Auth Layout 
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login/> },
      { path: "/signup", element: <Register /> },
    ],
  },
]);
