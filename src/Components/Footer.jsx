import { Box, Typography, Container, Link, useTheme, useMediaQuery } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: '#4158d0', color: "#fff", py: 4, mt: 6 }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={isSmallScreen ? "column" : "row"}
          justifyContent="space-between"
          alignItems={isSmallScreen ? "center" : "flex-start"}
          gap={4}
          textAlign={isSmallScreen ? "center" : "left"}
        >
          {/* 🔹 Left: Brand Info */}
          <Box flex={1} minWidth={200}>
            <Typography variant="h6" gutterBottom>
              MyShop
            </Typography>
            <Typography variant="body2">
              Your one-stop destination for all shopping needs. <br />
              Secure, Fast and Reliable.
            </Typography>
          </Box>

          {/* 🔸 Center: Quick Links */}
          <Box flex={1} minWidth={200}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link href="/shop" color="inherit" underline="hover" display="block">
              Shop
            </Link>
            <Link href="/contact" color="inherit" underline="hover" display="block">
              Contact
            </Link>
          </Box>

          {/* 🔹 Right: Contact Info */}
          <Box flex={1} minWidth={200}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: support@myshop.com</Typography>
            <Typography variant="body2">Phone: +91-9876543210</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
