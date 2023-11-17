import React from "react";
import GridContainer from "../../../components/GridContainer";
import { Container, Grid, Typography } from "@mui/material";
import MovimientosProveedorTable from "../components/MovimientoProveedorTable";

const ProveedorMovimientosList = () => {
  return (
    <Container>
      <GridContainer justifyContent="flex-start">
        <Grid item xs={12}>
          <Typography variant="h2" textAlign="left">
            Movimientos de Proveedor
          </Typography>
        </Grid>
        <Grid item xs={12} pb={"4rem"}>
          <MovimientosProveedorTable />
        </Grid>
      </GridContainer>
    </Container>
  );
};

export default ProveedorMovimientosList;
