import { useEffect, useState } from "react";
import movimientoService from "../services/movimientosService";

const useMovimientos = (entidad) => {
  const [movimientos, setMovimientos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let response = [];
      switch (entidad) {
        case "proveedor":
          response = await movimientoService.getAllByEntity(entidad);
          setMovimientos(response);
          setLoading(false);
          return response;
        default:
          break;
      }
      setMovimientos(response);
      setLoading(false);
    })();
  }, []);

  return { movimientos, loading };
};

export default useMovimientos;
