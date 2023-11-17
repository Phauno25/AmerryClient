import React from "react";
import updatableCategoria from "./updatableCategoria";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import formValidations from "../../../utils/validations";
import { useForm } from "react-hook-form";
import { CenteredBox, GridContainer } from "../../../components";

const CategoriaForm = updatableCategoria(({ categoria, onSubmitCategoria }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    onSubmitCategoria(data);
  };

  return categoria ? (
    <CenteredBox width="sm">
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <GridContainer>
          <Grid item xs={12}>
            <Typography variant="h4" textAlign="center">
              {categoria._id ? "Editar Categoria" : "Nuevo Categoria"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nombre"
              type="text"
              {...register("nombre", formValidations.nombre)}
              defaultValue={categoria?.nombre}
              error={errors.nombre?.message.length > 0}
              helperText={errors.nombre?.message}
              tabIndex={1}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              disabled={Object.keys(errors).length > 0}
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </GridContainer>
      </Box>
    </CenteredBox>
  ) : (
    ""
  );
});

export default CategoriaForm;
