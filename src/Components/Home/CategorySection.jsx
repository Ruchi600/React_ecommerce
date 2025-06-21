import React from "react";
import { Grid, Typography, Box, Card, CardMedia, CardContent, CardActionArea } from "@mui/material";

const categories = [
 // { name: "All"}, // make sure to add a relevant image
  { name: "Men", image: "/categories/man.avif" },
  { name: "Women", image: "/categories/young-woman-standing.avif" },
  { name: "Accessories", image: "/categories/model-career-kit-still-life_23-2150229753.avif" },
  { name: "Shoes", image: "/categories/men-shoes.avif" },
];

const CategorySection = ({ onCategorySelect, selectedCategory }) => {

  return (
    <Box sx={{ py: 6, px: 2, textAlign: "center" }}>
      <Typography variant="h4" mb={4}>
        Shop by Categories
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {categories.map((cat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  border: selectedCategory === cat.name.toLowerCase() ? "2px solid #1976d2" : "none"
                }}
              >
              <CardActionArea onClick={() => onCategorySelect(cat.name.toLowerCase())}>
                 <CardMedia
                  component="img"
                  height="180"
                  image={cat.image}
                  alt={cat.name}
                />
                <CardContent>
                  <Typography variant="h6" textAlign="center">{cat.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySection;
