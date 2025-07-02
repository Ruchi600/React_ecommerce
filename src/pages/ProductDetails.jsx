import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  Button,
} from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load product", err);
        setLoading(false);
      });
  }, [id]);

const handleAddToCart = () => {
  console.log("Add to cart clicked");

   const token = localStorage.getItem("token");

  if (!token) {
    // Not logged in!
    alert("Please log in to add products to your cart.");
    navigate("/login");
    return;
  }


  let cart = [];

  try {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
  } catch (err) {
    console.error("Cart parse failed:", err);
  }

  const existingIndex = cart.findIndex(
    (item) => Number(item.id) === Number(product.id)
  );

  if (existingIndex !== -1) {
    cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  console.log("Cart before saving:", cart);

  localStorage.setItem("cart", JSON.stringify(cart));
  window.dispatchEvent(new Event("storage"));

  console.log("Cart saved:", localStorage.getItem("cart"));

  navigate("/cart");
};


  if (loading) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <CircularProgress />
        <Typography>Loading product...</Typography>
      </Box>
    );
  }

  if (!product) {
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        Product not found.
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: 6, p: 2 }}>
      <Card
        sx={{
          p: 3,
          display: "flex",
          flexDirection: ["column", "row"],
          gap: 4,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ width: 300, objectFit: "contain", alignSelf: "center" }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ₹{(product.price * 85).toFixed(0)}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductDetails;
