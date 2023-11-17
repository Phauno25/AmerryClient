import { useCallback } from "react";
import cajaService from "../services/cajaService";
const updatableCaja = (Component) => {
  return (props) => {
    const { caja, loading } = useCaja(props.id);
    const { setStatus } = props;

    const onSubmitCaja = useCallback(
      async (data) => {
        setStatus({ status: "loading", message: "Cargando Caja" });
        const newCaja = { ...caja, ...data };
        const response = caja._id
          ? await cajaService.edit(newCaja)
          : cajaService.create(newCaja);
        response.status === 201
          ? props.setStatus({ status: "success", message: "ok" })
          : props.setStatus({
              status: "error",
              message: response.status.error,
            });
      },
      [caja]
    );

    return (
      !loading && (
        <Component {...props} caja={caja} onSubmitCaja={onSubmitCaja} />
      )
    );
  };
};

export default updatableCaja;
