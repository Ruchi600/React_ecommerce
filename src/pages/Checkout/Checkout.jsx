import React, { useState } from "react";
import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material"; // ✅ Use MUI Box for styling

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});

  const handleNextShipping = (data) => {
    setShippingInfo(data);
    setStep(1);
  };

  const handleNextPayment = (data) => {
    setPaymentInfo(data);
    setStep(2);
  };

  const handlePlaceOrder = () => {
    console.log("Shipping Info:", shippingInfo);
    console.log("Payment Info:", paymentInfo);
    navigate("/order-success");
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        py: 4,
      }}
    >
      {step === 0 && (
        <ShippingForm
          data={shippingInfo}
          onNext={handleNextShipping}
        />
      )}

      {step === 1 && (
        <PaymentForm
          data={paymentInfo}
          onNext={handleNextPayment}
          onBack={() => setStep(0)}
        />
      )}

      {step === 2 && (
        <Review
          shipping={shippingInfo}
          payment={paymentInfo}
          onBack={() => setStep(1)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </Box>
  );
};

export default Checkout;
