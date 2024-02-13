import { Box } from "@mui/material";
import React from "react";
import "./ProductFilter.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useProduct } from "../../context/ProductContext";
import { Link } from "react-router-dom";

const ProductCard = ({ el }) => {
  const { deleteProduct } = useProduct();
  return (
    <Box className="card">
      <img className="card_img" src={el.image} alt="img" />
      <Box className="card_text">
        <h4>{el.name}</h4>
        <h5>{el.type}'s Shoes</h5>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            color: "goldenrod",
            alignItems: "center",
          }}
        >
          <h6>{el.price}</h6>
          <DeleteIcon onClick={() => deleteProduct(el.id)} />
          <Link to={`/edit/${el.id}`}>
            <EditNoteIcon />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
export default ProductCard;
