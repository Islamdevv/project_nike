import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Register = () => {
  const { register, signInWithGoogle } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "400px",
        m: "100px auto",
      }}
    >
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Sign up
      </Typography>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <Button onClick={handleSubmit} variant="contained">
        Sign up
      </Button>
      <Button onClick={() => signInWithGoogle()} variant="contained">
        Sign in with Google
      </Button>
    </Box>
  );
};

export default Register;
