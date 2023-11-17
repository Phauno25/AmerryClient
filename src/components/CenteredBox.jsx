import { Box, Container, Paper } from "@mui/material";
import React from "react";

const CenteredBox = ({ children, width = "xl", height = "50vh" }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight={height}
    >
      <Container maxWidth={width}>
        <Paper
        elevation={0}
          sx={{
            px: 2,
            py: 2,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
};

export default CenteredBox;
