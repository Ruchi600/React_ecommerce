import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">🎉 Order Placed Successfully!</h1>
      <p className="mb-4">Thank you for shopping with us.</p>
      <Link to="/" className="text-blue-600 underline">
        Back to Home
      </Link>
    </div>
  );
};

export default OrderSuccess;
