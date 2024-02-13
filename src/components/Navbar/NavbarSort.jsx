import { Box, Typography } from "@mui/material";
import React from "react";
import { useProduct } from "../../context/ProductContext";
import ProductPagination from "../Products/ProductPagination";

const NavbarSort = () => {
  const { data } = useProduct();
  return (
    <Box sx={{ padding: "10px 0" }}>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "25px", color: "#000" }}>
            All Shoes ({data.length})
          </Typography>
          <Box>
            <ProductPagination />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarSort;
