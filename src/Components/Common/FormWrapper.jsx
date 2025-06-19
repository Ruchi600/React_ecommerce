import React from "react";
import { Container, Paper } from "@mui/material";

const FormWrapper = ({ children }) => (
  <Container maxWidth="sm">
    <Paper elevation={6} sx={{ p: 4, borderRadius: 4, mt: 8 }}>
      {children}
    </Paper>
  </Container>
);

export default FormWrapper;
