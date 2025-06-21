import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, CircularProgress, Card, CardMedia, Button } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load product", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <CircularProgress />
        <Typography>Loading product...</Typography>
      </Box>
    );
  }

  if (!product) {
    return <Typography align="center" sx={{ mt: 4 }}>Product not found.</Typography>;
  }

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: 6, p: 2 }}>
      <Card sx={{ p: 3, display: "flex", flexDirection: ["column", "row"], gap: 4 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ width: 300, objectFit: "contain", alignSelf: "center" }}
        />
        <Box>
          <Typography variant="h4" gutterBottom>{product.title}</Typography>
          <Typography variant="body1" gutterBottom>{product.description}</Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ₹{(product.price * 85).toFixed(0)}
          </Typography>
          <Button variant="contained" color="primary">Add to Cart</Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductDetails;
