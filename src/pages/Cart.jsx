import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Divider,
  Button,
   IconButton,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
   // console.log("cart:", cartData); // ✅ DEBUG
    if (cartData) {
      try {
        const parsedCart = JSON.parse(cartData);
        console.log("Loaded cart from localStorage:", parsedCart); // ✅ DEBUG
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Failed to parse cart:", error);
      }
    }
  }, []);


  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));

  };

  const handleIncrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));

  };


  const handleDecrease = (index) => {
    const updatedCart = [...cartItems];
    if ((updatedCart[index].quantity || 1) > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("storage"));

    }
  }

  const handleCheckout = () => {
     navigate("/checkout");
  // setCartItems([]);
  // localStorage.removeItem("cart");
  // alert("Checkout successful! Thank you for your purchase 🎉");
  // navigate("/");
};


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * 85 * (item.quantity || 1),
    0
  );
  return (
    <Box sx={{ py: 5, px: 2, maxWidth: "1000px", mx: "auto" }}>
      <Typography variant="h4" gutterBottom align="center">
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <>
          <Typography align="center">Your cart is empty.</Typography>
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button component={Link} to="/" variant="outlined">
              Continue Shopping
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Card sx={{ display: "flex", p: 2, alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{ width: 100, objectFit: "contain" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">
                      {item.title.slice(0, 50)}...
                    </Typography>
                    <Typography variant="body2">
                      ₹{(item.price * 85).toFixed(0)}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <IconButton onClick={() => handleDecrease(index)}>
                        <RemoveIcon />
                      </IconButton>
                      <Typography variant="body2" sx={{ mx: 1 }}>
                        Qty: {item.quantity || 1}
                      </Typography>
                      <IconButton onClick={() => handleIncrease(index)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </CardContent>

                  <IconButton onClick={() => handleRemove(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" align="right">
            Total: ₹{total.toFixed(0)}
          </Typography>
          
             {/* ✅ NEW BUTTON */}
          <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            sx={{ mr: 2 }} // ✅ adds right space
          >
            Continue Shopping
          </Button>
          
          <Button  color="primary" variant="contained"  onClick={handleCheckout}>Checkout</Button>

        </Box>

        </>
      )}
    </Box>
  );
};

export default Cart;