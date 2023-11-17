import { useEffect, useState } from "react";
import belieService from "../services/belieService";

const useEntity = (id = null, entity) => {
  const [entity, setEntity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await belieService.getById(id, entity);
        setProveedor(response);
        setLoading(false);
      } else {
        const response = await belieService.getAll(entity);
        setProveedor(response);
        setLoading(false);
      }
    })();
  }, []);

  return { entity, loading };
};

export default useEntity;
