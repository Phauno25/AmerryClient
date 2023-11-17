import React from "react";
import GridContainer from "../../../components/GridContainer";
import { Grid, Typography } from "@mui/material";
import MovimientosTable from "../components/MovimientosTable";
import useProveedor from "../../proveedor/hooks/useProveedor";
import { useSelector } from "react-redux";

const MovimientosList = () => {
  const { loading } = useProveedor();
  const proveedores = useSelector(
    (state) => state.proveedorReducer.allProveedores
  );

  return (
    <GridContainer>
      <Grid item xs={12}>
        <Typography variant="h2" textAlign="left">
          {`Lista de Movimientos de ${entidad}`}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MovimientosTable id={id} entidad={entidad} />
      </Grid>
    </GridContainer>
  );
};

export default MovimientosList;
