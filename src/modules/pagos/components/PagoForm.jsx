import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { CenteredBox, GridContainer } from "../../../components";
import formValidations from "../../../utils/validations";
import { Controller, useForm } from "react-hook-form";
import pagoFormHoc from "./pagoFormHOC";

const PagoForm = pagoFormHoc(({ entidad, cajas, onSubmitPago, onCancel }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const onSubmit = (data) => {
    onSubmitPago(data);
  };

  return (
    <CenteredBox width="sm">
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)}>
        <GridContainer>
          <Grid item xs={12}>
            <Typography variant="h4" textAlign="center">
              {`Pago a ${entidad.nombre}`}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              label="Monto del Pago"
              type="number"
              name="monto"
              {...register("monto", formValidations.deuda)}
              defaultValue={entidad?.deuda}
              error={errors.deuda?.message.length > 0}
              helperText={errors.deuda?.message}
              tabIndex={1}
            />
          </Grid>
          {cajas ? (
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="compra-tipoPago-label">
                  De que caja sale el pago?
                </InputLabel>
                <Controller
                  name="caja"
                  control={control}
                  defaultValue={""}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      name="caja"
                      labelId="compra-tipoPago-label"
                      label="Seleccioná la caja"
                      value={value}
                      onChange={onChange}
                      fullWidth
                    >
                      {cajas.map((caja, index) => {
                        return (
                          <MenuItem
                            selected={index === 1}
                            key={caja._id}
                            value={caja._id}
                          >
                            {`${caja.nombre} ($${caja.saldo})`}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
          ) : (
            "cargando cajas"
          )}
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
});

export default PagoForm;
