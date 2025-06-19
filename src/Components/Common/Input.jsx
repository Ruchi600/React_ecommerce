import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  icon: Icon,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      value={value}
      onChange={onChange}
      fullWidth
      InputProps={{
        startAdornment: Icon ? (
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        ) : null,
      }}
      {...rest}
    />
  );
};

export default Input;
