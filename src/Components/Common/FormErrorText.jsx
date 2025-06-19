import React from "react";
import { Typography } from "@mui/material";

const FormErrorText = ({ message }) => {
  if (!message) return null; // Don't render anything if there's no error

  return (
    <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 0.5 }}>
      {message}
    </Typography>
  );
};

export default FormErrorText;
