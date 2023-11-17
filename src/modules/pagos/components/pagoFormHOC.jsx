import { useCallback } from "react";
import useCaja from "../../caja/hooks/useCaja";
import proveedorService from "../../proveedor/services/proveedorService";
import { useDispatch } from "react-redux";
import { updateProveedores } from "../../proveedor/reducers/proveedorSlice";

const pagoFormHoc = (Component) => {
  return (props) => {
    const { setStatus } = props;
    const dispatch = useDispatch();
    const { caja: cajas, loading } = useCaja();

    const onSubmitPago = useCallback(
      async (data) => {
        setStatus({ status: "loading", message: "Cargando Proveedor" });
        let response = {};
        const newPagoProv = {
          ...data,
          ...{ entidad: props.entidad, tipoEntidad: props.tipoEntidad },
        };
        switch (props.tipoEntidad) {
          case "proveedor":
            response = await proveedorService.generarPago(newPagoProv);
            if (response.status === 201) {
              response = await response.json();
              console.log(response);
              props.setStatus({ status: "success", message: "ok" });
              dispatch(
                updateProveedores({
                  ...props.entidad,
                  deuda: props.entidad.deuda - response.monto,
                })
              );
            } else {
              props.setStatus({
                status: "error",
                message: response.status.error,
              });
            }
            break;

          default:
            return false;
        }
      },
      [props.entity]
    );

    return (
      !loading && (
        <Component {...props} cajas={cajas} onSubmitPago={onSubmitPago} />
      )
    );
  };
};

export default pagoFormHoc;
