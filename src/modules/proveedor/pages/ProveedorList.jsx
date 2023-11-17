import React from "react";
import GridContainer from "../../../components/GridContainer";
import { Container, Fab, Grid, Icon, Typography } from "@mui/material";
import ProveedorTable from "../components/ProveedorTable";
import useProveedor from "../hooks/useProveedor";
import { useDispatch, useSelector } from "react-redux";
import { setProveedorSelected } from "../reducers/proveedorSlice";
import ProveedorForm from "../components/ProveedorForm";
import ActionModalForm from "../../../components/ActionModalForm";
import { setModal } from "../../../store/belieSlice";
import PagoForm from "../../pagos/components/PagoForm";

const ProveedorList = () => {
  const { loading } = useProveedor();
  const modal = useSelector((state) => state.belieReducer.modal || false);
  const proveedores = useSelector(
    (state) => state.proveedorReducer.allProveedores
  );
  const proveedor = useSelector(
    (state) => state.proveedorReducer.proveedorSelected
  );
  const dispatch = useDispatch();
  const cancel = () => dispatch(setModal({ isOpen: false, display: "" }));
  const newProveedor = () => {
    dispatch(setProveedorSelected({}));
    dispatch(setModal({ isOpen: true, display: "proveedor" }));
  };

  return !loading ? (
    <Container>
      <GridContainer justifyContent="flex-start">
        <Grid item xs={12}>
          <Typography variant="h2" textAlign="left">
            Lista de Proveedores
          </Typography>
        </Grid>
        <Grid item xs={12} pb={"4rem"}>
          <ProveedorTable proveedores={proveedores} />
        </Grid>
      </GridContainer>

      <Fab
        size="medium"
        variant="extended"
        sx={{ position: "fixed", bottom: "1rem", right: "1rem" }}
        onClick={newProveedor}
      >
        <Icon sx={{ marginRight: ".5rem" }}>add_circle</Icon>
        <Typography> Nuevo Proveedor</Typography>
      </Fab>

      {modal.display === "proveedor" && (
        <ActionModalForm
          isOpen={modal.isOpen}
          onCancel={cancel}
          editOkMessage={"Proveedor editado con éxito"}
          createOkMessage={"Proveedor creado con éxito"}
          loadingMessage={"Cargando proveedor"}
          idEntity={proveedor?._id}
        >
          <ProveedorForm proveedor={proveedor} />
        </ActionModalForm>
      )}

      {modal.display === "pago" && (
        <ActionModalForm
          isOpen={modal.isOpen}
          onCancel={cancel}
          editOkMessage={""}
          createOkMessage={"Pago generado con éxito"}
          loadingMessage={"Generando pago"}
        >
          <PagoForm entidad={proveedor} tipoEntidad="proveedor" />
        </ActionModalForm>
      )}
    </Container>
  ) : (
    "Cargando Proveedores"
  );
};

export default ProveedorList;
