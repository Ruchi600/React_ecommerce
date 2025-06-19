import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, variant = "contained", ...props }) => {
  return (
    <MuiButton
      variant={variant}
      fullWidth
      sx={{
        bgcolor: "#4158d0",
        "&:hover": { bgcolor: "#c850c0" },
        borderRadius: "25px",
        py: 1.5,
        mt: 2,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
