import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


   const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((product) => product.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log("Fetched products:", res.data); // ✅ Log the API response
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="body1" mt={2}>Loading products...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 6, px: 2 }}>
      <Typography variant="h4" align="center" mb={4}>
        Featured Products
      </Typography>

     <Grid container spacing={4}>
      {filteredProducts.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
            <Card sx={{ borderRadius: 2, height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", p: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" fontWeight={600}>
                  {product.title.slice(0, 40)}...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{(product.price * 85).toFixed(0)}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>

    </Box>
  );
};

export default ProductList;