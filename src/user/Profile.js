import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import Api from "../Api";
// import "../css/forms.css";

/** User profile edit form */
function Profile({ editProfile, currUser }) {
  let nav = useNavigate();

  const [formData, setFormData] = useState();

  const [username, setUsername] = useState();

  const [error, setError] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        let res = await Api.getUser(+currUser.userId, currUser.token);
        setFormData({
          username: res.username,
          email: res.email,
          location: res.location.name,
          password: "",
          confirm: "",
        });
        setUsername(res.username);
      } catch (err) {
        // console.log(err);
        nav("/");
      }
    }
    getUser();
  }, []);

  /** Update formData */
  const handleChange = (e) => {
    e.preventDefault();
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  /** Call editProfile with form data */
  const handleSubmit = async (e) => {
    try {
      let res;
      e.preventDefault();
      if (!formData.email.includes("@")) {
        throw new Error("Email format invalid");
      }
      if (formData.password !== formData.confirm) {
        throw new Error("Password and Password Confirmation do not match");
      }
      if (!formData.password) {
        res = await editProfile({
          newUsername: formData.username,
          email: formData.email,
          location: { name: formData.location },
        });
      } else {
        res = await editProfile({
          newUsername: formData.username,
          email: formData.email,
          location: { name: formData.location },
          password: formData.password,
        });
      }
      if (res === "success") {
        nav("/");
      }
    } catch (err) {
      // setError(err.message);
      //   console.log(error);
    }
  };

  return formData ? (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Card sx={{ padding: "20px", maxWidth: "20rem" }}>
        <Typography component="h1" variant="h5">
          Edit Profile
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
            value={formData.username}
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
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            spellCheck="false"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="location"
            label="Location"
            name="location"
            autoComplete="location"
            spellCheck="false"
            value={formData.location}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Submit
          </Button>
        </Box>
      </Card>
    </Box>
  ) : null;
}

export default Profile;
