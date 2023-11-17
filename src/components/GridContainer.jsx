import { Grid } from "@mui/material";
import React from "react";

const GridContainer = ({ children, justifyContent = "center" }) => {
  return (
    <Grid container spacing={2} sx={{ justifyContent: justifyContent }}>
      {children}
    </Grid>
  );
};

export default GridContainer;
