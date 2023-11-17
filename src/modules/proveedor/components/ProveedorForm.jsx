import React from "react";
import proveedorFormHOC from "./proveedorFormHOC";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import formValidations from "../../../utils/validations";
import { useForm } from "react-hook-form";
import { CenteredBox, GridContainer } from "../../../components";

const ProveedorForm = proveedorFormHOC(
  ({ proveedor, onSubmitProveedor, onCancel }) => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
      onSubmitProveedor(data);
    };

    return (
      <CenteredBox width="sm">
        <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
          <GridContainer>
            <Grid item xs={12}>
              <Typography variant="h4" textAlign="center">
                {proveedor._id ? "Editar Proveedor" : "Nuevo Proveedor"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre"
                type="text"
                {...register("nombre", formValidations.nombre)}
                defaultValue={proveedor?.nombre}
                error={errors.nombre?.message.length > 0}
                helperText={errors.nombre?.message}
                tabIndex={1}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Codigo"
                type="text"
                {...register("codigo", formValidations.codigo)}
                defaultValue={proveedor?.codigo}
                error={errors.codigo?.message.length > 0}
                helperText={errors.codigo?.message}
                tabIndex={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Deuda"
                type="number"
                {...register("deuda", formValidations.deuda)}
                defaultValue={proveedor?.deuda}
                error={errors.deuda?.message.length > 0}
                helperText={errors.deuda?.message}
                tabIndex={3}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={onCancel}>
                Cancelar
              </Button>
              <Button
                variant="contained"
                disabled={Object.keys(errors).length > 0}
                type="submit"
              >
                Confirmar
              </Button>
            </Grid>
          </GridContainer>
        </Box>
      </CenteredBox>
    );
  }
);

export default ProveedorForm;
