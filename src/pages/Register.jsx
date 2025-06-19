import React, { useState } from "react";
import { Typography, IconButton, InputAdornment, Link as MuiLink, Box } from "@mui/material";
import { Visibility, VisibilityOff, Person, Email, Lock } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";

import Input from "../Components/Common/Input";
import Button from "../Components/Common/Button";
import FormWrapper from "../Components/Common/FormWrapper";
import PageLayout from "../Components/Common/PageLayout";
import FormErrorText from "../Components/Common/FormErrorText";
import PasswordInput from "../Components/Common/PasswordInput";
import SnackbarAlert from "../Components/Common/SnackbarAlert";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", severity: "info" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setAlert({ open: true, message: "Please fill in all fields.", severity: "warning" });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ open: true, message: "Passwords do not match.", severity: "error" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((user) => user.email === email);
    if (exists) {
      setAlert({ open: true, message: "User already registered.", severity: "error" });
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setAlert({ open: true, message: "Registration successful!", severity: "success" });
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <PageLayout>
      <FormWrapper>
        <Typography variant="h4" align="center" gutterBottom>
          Create Account
        </Typography>

        <form onSubmit={handleRegister}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Input
              label="Full Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              icon={Person}
            />
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              icon={Email}
            />
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              icon={Lock}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Input
              label="Confirm Password"
              type={showConfirm ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              icon={Lock}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowConfirm((prev) => !prev)}>
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit">Sign Up</Button>
          </Box>
        </form>

        <Typography variant="body2" align="center" mt={3}>
          Already have an account? {" "}
          <MuiLink component={Link} to="/login" color="primary">
            Sign In
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

export default Register;
