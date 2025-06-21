import React, { useState } from "react";
import { Box, Button, Typography, Grid, Paper, Container } from "@mui/material";
import HeroSlider from "../Components/Common/HeroSlider";
import CategorySection from "../Components/Home/CategorySection";
import ProductList from "../Components/Home/ProductList";


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <HeroSlider />
      {/* <CategorySection onCategorySelect={setSelectedCategory} /> */}
      <CategorySection
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <ProductList selectedCategory={selectedCategory} />
     </>
  );
};

export default Home;