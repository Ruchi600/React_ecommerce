import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";

const PasswordInput = ({ label, value, onChange, ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <TextField
      type={show ? "text" : "password"}
      label={label}
      value={value}
      onChange={onChange}
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShow(!show)} edge="end">
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

export default PasswordInput;
