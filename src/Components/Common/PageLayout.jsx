import React from "react";
import { Container, Box } from "@mui/material";

const PageLayout = ({ children, maxWidth = "sm", center = true }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: center ? "flex" : "block",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #c850c0, #4158d0)",
        py: 6,
      }}
    >
      <Container maxWidth={maxWidth}>
        {children}
      </Container>
    </Box>
  );
};

export default PageLayout;
