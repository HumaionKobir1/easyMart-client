import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import ManageProducts from "../Dashboard/ManageProduct/ManageProduct";
import AddProduct from "../Dashboard/AllProduct/AddProduct";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import AllProductsPage from "../pages/AllProductPage/AllProductsPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path: 'view-details/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params})=> fetch(`https://easymart-server.vercel.app/product/${params.id}`)
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/all-product-page',
          element: <AllProductsPage></AllProductsPage>
        }
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout
      ></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: '/dashboard/all-users',
          element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
        },
        {
          path: '/dashboard/manage-product',
          element: <PrivateRoute><ManageProducts></ManageProducts></PrivateRoute>
        },
        {
          path: '/dashboard/add-product',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        }
      ]
    }
  ]);

  export default router;