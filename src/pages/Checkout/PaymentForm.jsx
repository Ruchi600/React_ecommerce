import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const PaymentForm = ({ data, onNext, onBack }) => {
  const [form, setForm] = useState(data);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.cardNumber || !form.expiry || !form.cvv) {
      alert("Please fill all required fields.");
      return;
    }
    onNext(form);
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        💳 Payment Details
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              name="cardNumber"
              value={form.cardNumber || ""}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ maxLength: 16 }}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Expiry Date (MM/YY)"
              name="expiry"
              value={form.expiry || ""}
              onChange={handleChange}
              fullWidth
              required
              placeholder="MM/YY"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="CVV"
              name="cvv"
              value={form.cvv || ""}
              onChange={handleChange}
              fullWidth
              required
              inputProps={{ maxLength: 4 }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default PaymentForm;
