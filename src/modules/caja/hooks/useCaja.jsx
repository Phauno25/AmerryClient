import { useEffect, useState } from "react";
import belieService from "../../../services/belieService";

const useCaja = (id = null) => {
  const [caja, setCaja] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await cajaService.getById(id);
        setCaja(response);
        setLoading(false);
      } else {
        const response = await belieService.getAll("caja");
        setCaja(response);
        setLoading(false);
      }
    })();
  }, []);

  return { caja, loading };
};

export default useCaja;
