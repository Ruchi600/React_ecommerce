import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Review = ({ shipping = {}, payment = {}, onBack, onPlaceOrder }) => {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        📦 Review Your Order
      </Typography>

      <Box sx={{ my: 3 }}>
        <Typography variant="h6">Shipping Information</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Name" secondary={shipping.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary={shipping.address} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={shipping.city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="ZIP Code" secondary={shipping.zip} />
          </ListItem>
        </List>
      </Box>

      <Divider />

      <Box sx={{ my: 3 }}>
        <Typography variant="h6">Payment Details</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Card Number"
              secondary={
                payment.cardNumber
                  ? `**** **** **** ${payment.cardNumber.slice(-4)}`
                  : ""
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Expiry Date" secondary={payment.expiry} />
          </ListItem>
        </List>
      </Box>

      <Divider />

      <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onPlaceOrder}
          sx={{ px: 4 }}
        >
          Place Order
        </Button>
      </Box>
    </Paper>
  );
};

export default Review;
