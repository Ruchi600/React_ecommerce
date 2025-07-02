import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const ShippingForm = ({ data, onNext }) => {
  const [form, setForm] = useState(data);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.city || !form.zip) {
      alert("Please fill all required fields.");
      return;
    }
    onNext(form);
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        🚚 Shipping Information
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={form.address || ""}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="City"
              name="city"
              value={form.city || ""}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Zip Code"
              name="zip"
              value={form.zip || ""}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: "right" }}>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ShippingForm;
