import React, { useState } from "react";
import UpNavbar from "../Navbar/UpNavbar";
import NavbarTest from "../Navbar/NavbarTest";
import NavbarCarusel from "../Navbar/NavbarCarusel";
import { Box, Button, TextField } from "@mui/material";
import { useProduct } from "../../context/ProductContext";
import NavbarSort from "../Navbar/NavbarSort";

const Admin = () => {
  const { addProduct } = useProduct();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  function addContext() {
    const obj = {
      name: name,
      price: price,
      type: type,
      image: image,
    };
    addProduct(obj);
  }

  return (
    <>
      <UpNavbar />
      <NavbarTest />
      <NavbarCarusel />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Box
          sx={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setImage(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
          />
          <Button
            onClick={addContext}
            sx={{
              background: "#000",
              "&:hover": {
                background: "#000",
              },
              fontWeight: "bold",
            }}
            variant="contained"
          >
            add shoes
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Admin;
