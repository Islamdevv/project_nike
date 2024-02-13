import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../image/up_test.png";
import "./Navbar.css";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import { AccountCircle } from "@mui/icons-material";
import { useAuthContext } from "../../context/AuthContext";

const NavbarTest = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { data, setData, readProduct } = useProduct();
  const { user } = useAuthContext();
  function searchData() {
    let result = data.filter(
      (el) =>
        el.name.toLowerCase().includes(search) || el.price.includes(search)
    );
    setData(result);
  }

  useEffect(() => {
    searchData();
  }, [search]);

  if (!search) {
    readProduct();
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box id="test_navbar">
      <Box className="container">
        <Box className="test_navbar">
          <img src={logo} alt="test_navbar" />
          <Box className="test_navbar_nav">
            <Box className="test_nav_link">
              <IconButton onClick={() => navigate("/admin")}>
                <AddIcon />
              </IconButton>
              <Typography>New & Featured</Typography>
              <Link to="/">
                <Typography>Men</Typography>
              </Link>
              <Typography>Women</Typography>
              <Typography>Kids</Typography>
              <Typography>Sale</Typography>
              <Typography>Customise</Typography>
              <Typography>SNKRS</Typography>
            </Box>
            <Box className="test_navbar_icons">
              <Box sx={{ position: "relative" }}>
                <SearchIcon
                  sx={{
                    position: "absolute",
                    top: "7px",
                    left: "10px",
                  }}
                />
                <input
                  style={{
                    width: "110px",
                    height: "35px",
                    borderRadius: "20px",
                    paddingLeft: "40px",
                    fontSize: "15px",
                    border: "1px solid gray",
                  }}
                  placeholder="Search…"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  autoComplete="off"
                />
              </Box>
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton sx={{ p: "5px 0" }}>
                <WorkOutlineIcon />
              </IconButton>
              {user ? (
                <>
                  <Tooltip title={user.displayName}>
                    <img
                      onClick={handleMenu}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  </Tooltip>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link to="/register">
                      <MenuItem onClick={handleClose}>Sign up</MenuItem>
                    </Link>
                    <Link to="/sign_in">
                      <MenuItem onClick={handleClose}>Sign in</MenuItem>
                    </Link>
                  </Menu>
                </>
              ) : (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarTest;
