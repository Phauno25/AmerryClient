import { useEffect, useState } from "react";
import categoriaService from "../services/categoriaService";

const useCategoria = (id = null) => {
  const [categoria, setCategoria] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await categoriaService.getById(id);
        setCategoria(response);
        setLoading(false);
      } else {
        const response = await categoriaService.getAll();
        setCategoria(response);
        setLoading(false);
      }
    })();
  }, []);

  return { categoria, loading };
};

export default useCategoria;
