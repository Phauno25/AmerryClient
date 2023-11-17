import { useCallback } from "react";
import proveedorService from "../services/proveedorService";
import { useDispatch } from "react-redux";
import { updateProveedores } from "../reducers/proveedorSlice";

const proveedorFormHOC = (Component) => {
  return (props) => {
    const { setStatus } = props;
    const dispatch = useDispatch();

    const onSubmitProveedor = useCallback(
      async (data) => {
        setStatus({ status: "loading", message: "Cargando Proveedor" });
        const newProveedor = { ...props.proveedor, ...data };
        const response = props.proveedor._id
          ? await proveedorService.edit(newProveedor)
          : await proveedorService.create(newProveedor);

        if (response.status === 201) {
          props.setStatus({ status: "success", message: "ok" });
          dispatch(updateProveedores(await response.json()));
        } else {
          props.setStatus({
            status: "error",
            message: response.status.error,
          });
        }
      },
      [props.proveedor]
    );

    return <Component {...props} onSubmitProveedor={onSubmitProveedor} />;
  };
};

export default proveedorFormHOC;
