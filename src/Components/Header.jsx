import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateToken = () => setToken(localStorage.getItem('token'));
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      setCartCount(total);
    };

    updateToken();
    updateCart();

    window.addEventListener('storage', updateToken);
    window.addEventListener('storage', updateCart);

    return () => {
      window.removeEventListener('storage', updateToken);
      window.removeEventListener('storage', updateCart);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('storage'));
    navigate('/login');
  };

  const staticLinks = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
  ];

  const authLinks = token
    ? [{ label: 'Dashboard', path: '/dashboard' }]
    : [
        { label: 'Login', path: '/login' },
        { label: 'Register', path: '/register' },
      ];

  const navLinks = [...staticLinks, ...authLinks];

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#4158d0' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Button component={Link} to="/" sx={{ p: 0 }} color="inherit">
            <img
              src="/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png"
              alt="Logo"
              style={{ height: 60 }}
            />
          </Button>

          {/* Desktop Menu */}
          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  color="inherit"
                  component={Link}
                  to={link.path}
                >
                  {link.label}
                </Button>
              ))}

              {token && (
                <Button color="inherit" onClick={handleLogout}>
                  Log Out
                </Button>
              )}

              <IconButton component={Link} to="/cart" color="inherit">
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton component={Link} to={link.path}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}

            {token && (
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemText primary="Log Out" />
                </ListItemButton>
              </ListItem>
            )}

            <ListItem disablePadding>
              <ListItemButton component={Link} to="/cart">
                <ShoppingCartIcon />
                <ListItemText
                  primary={`Cart (${cartCount})`}
                  sx={{ ml: 1 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
