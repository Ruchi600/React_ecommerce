import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/banners/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online.jpg",
    title: "Summer Collection 2025",
    subtitle: "Flat 50% Off On All Categories",
  },
  {
    image: "/banners/online-purchasing-payment-e-commerce-banking.jpg",
    title: "New Arrivals Just In!",
    subtitle: "Explore trending styles",
  },
  
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      style={{ height: "60vh", width: "100%", marginBottom: "2rem" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
  <Box
    sx={{
      height: "60vh", // 👈 add this to fix the image stacking
      backgroundImage: `url(${slide.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "#fff",
      position: "relative",
      px: 3,
    }}
  >
    <Box
      sx={{
        background: "rgba(0,0,0,0.5)",
        p: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>{slide.title}</Typography>
      <Typography variant="h6" gutterBottom>{slide.subtitle}</Typography>
      <Button variant="contained" component={Link} to="/shop">
        Shop Now
      </Button>
    </Box>
  </Box>
</SwiperSlide>

      ))}
    </Swiper>
  );
};

export default HeroSlider;
