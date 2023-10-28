import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const SignIn = ({ login, toggleMode }) => {
  let nav = useNavigate();

  const initialState = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialState);

  /** Update formData */
  const handleChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  /** Call login with form data */
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
    nav(`/`);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          maxWidth: "20rem",
          justifyContent: "center",
        }}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            spellCheck="false"
            autoFocus
            value={formData.username || ""}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            spellCheck="false"
            value={formData.password || ""}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <div>
            Not registered?
            <Button onClick={() => toggleMode()}>Register here</Button>
          </div>
        </Box>
      </Card>
    </Box>
  );
};

export default SignIn;
