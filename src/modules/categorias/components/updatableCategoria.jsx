import { useCallback } from "react";
import useCategoria from "../hooks/useCategoria";
import categoriaService from "../services/categoriaService";
const updatableCategoria = (Component) => {
  return (props) => {
    const { categoria, loading } = useCategoria(props.id);
    const { setStatus } = props;

    const onSubmitCategoria = useCallback(
      async (data) => {
        setStatus({ status: "loading", message: "Cargando Categoria" });
        const newCategoria = { ...categoria, ...data };
        const response = categoria._id
          ? await categoriaService.edit(newCategoria)
          : categoriaService.create(newCategoria);
        response.status === 201
          ? props.setStatus({ status: "success", message: "ok" })
          : props.setStatus({
              status: "error",
              message: response.status.error,
            });
      },
      [categoria]
    );

    return (
      !loading && (
        <Component
          {...props}
          categoria={categoria}
          onSubmitCategoria={onSubmitCategoria}
        />
      )
    );
  };
};

export default updatableCategoria;
