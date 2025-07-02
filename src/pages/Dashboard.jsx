import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";


// const Dashboard = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("currentUser"));
//     setUser(userData);
//   }, []);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>Welcome, {user.name}!</h1>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default Dashboard;



const Dashboard = () => {

   
   const navigate = useNavigate();
   const [user, setUser] = useState(null);
   const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(savedUser);
    //console.log(savedUser);

    if (!token) {
      navigate("/login");
    } else {
      setUser(savedUser);
    }

    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [
      {
        id: 1,
        date: "2025-06-12",
        total: "₹1500",
        items: 3,
        status: "Delivered",
      },
      {
        id: 2,
        date: "2025-06-10",
        total: "₹800",
        items: 1,
        status: "Processing",
      },
    ];
    setOrders(savedOrders);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("users");
    navigate("/login");
 };

  if (!user) return null;

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", my: 8, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user.name}!
      </Typography>

      <Typography variant="h6" gutterBottom>
        📋 Profile Info:
      </Typography>
      <Typography variant="body1">Username: {user.name}</Typography>
      <Typography variant="body1">Email: {user.email || "N/A"}</Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" gutterBottom>
        🛒 Your Orders:
      </Typography>

      {orders.length === 0 ? (
        <Typography>No orders yet.</Typography>
      ) : (
        orders.map((order) => (
          <Card key={order.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="subtitle1">
                Order #{order.id} — {order.status}
              </Typography>
              <Typography variant="body2">Date: {order.date}</Typography>
              <Typography variant="body2">Items: {order.items}</Typography>
              <Typography variant="body2">Total: {order.total}</Typography>
            </CardContent>
          </Card>
        ))
      )}

      <Divider sx={{ my: 4 }} />

      <Button variant="contained" color="error" onClick={handleLogout}>
        Log Out
      </Button>
    </Box>
  );
};

export default Dashboard;
