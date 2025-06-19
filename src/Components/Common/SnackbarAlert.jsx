import React from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarAlert = ({ open, message, severity = "info", onClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={3000}
    onClose={onClose}
    anchorOrigin={{ vertical: "top", horizontal: "center" }} // Optional positioning
  >
    <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
      {message}
    </Alert>
  </Snackbar>
);

export default SnackbarAlert;
