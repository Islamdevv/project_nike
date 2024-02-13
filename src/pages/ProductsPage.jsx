import React from "react";

import { Box } from "@mui/material";
import ProductFilter from "../components/Products/ProductFilter";
import Footer from "../components/Footer/Footer";
import NavbarCarusel from "../components/Navbar/NavbarCarusel";
import NavbarTest from "../components/Navbar/NavbarTest";
import UpNavbar from "../components/Navbar/UpNavbar";
import ProductList from "../components/Products/ProductList";
import NavbarSort from "../components/Navbar/NavbarSort";

const ProductsPage = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <UpNavbar />
        <NavbarTest />
        <NavbarCarusel />
        <NavbarSort />
        <Box sx={{ display: "flex" }}>
          <Box>
            <ProductFilter />
          </Box>
          <Box>
            <ProductList />
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default ProductsPage;
