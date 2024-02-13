import React from "react";
import Admin from "../components/admin/Admin";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import EditProduct from "../components/EditProduct/EditProduct";
import Register from "../components/autentication/Register";
import SignIn from "../components/autentication/SignIn";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/", element: <ProductsPage />, id: 3 },
    { link: "/edit/:id", element: <EditProduct />, id: 4 },
    { link: "/register", element: <Register />, id: 5 },
    { link: "/sign_in", element: <SignIn />, id: 6 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
