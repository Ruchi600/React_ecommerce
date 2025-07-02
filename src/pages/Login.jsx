import React, { useState } from "react";
import { Typography, IconButton, InputAdornment, Link as MuiLink, Box } from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";

import Input from "../Components/Common/Input";
import Button from "../Components/Common/Button";
import FormWrapper from "../Components/Common/FormWrapper";
import PageLayout from "../Components/Common/PageLayout";
import SnackbarAlert from "../Components/Common/SnackbarAlert";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", severity: "info" });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setAlert({ open: true, message: "Please fill in both fields.", severity: "warning" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
     // localStorage.setItem("token", JSON.stringify(matchedUser));
       localStorage.setItem('token', 'FAKE-TOKEN-123');
       localStorage.setItem("currentUser", JSON.stringify(matchedUser));

      setAlert({ open: true, message: "Login successful!", severity: "success" });
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      setAlert({ open: true, message: "Invalid email or password.", severity: "error" });
    }
  };

  return (
    <PageLayout>
      <FormWrapper>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome Back
        </Typography>

        <form onSubmit={handleLogin}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              icon={Email}
              required
            />

            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              icon={Lock}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button type="submit">Log In</Button>
          </Box>
        </form>

        <Typography variant="body2" align="center" mt={3}>
          Don't have an account?{" "}
          <MuiLink component={Link} to="/register" color="primary">
            Register
          </MuiLink>
        </Typography>

        <SnackbarAlert
          open={alert.open}
          message={alert.message}
          severity={alert.severity}
          onClose={() => setAlert({ ...alert, open: false })}
        />
      </FormWrapper>
    </PageLayout>
  );
}

export default Login;
