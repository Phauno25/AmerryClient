import { useEffect, useState } from "react";
import proveedorService from "../services/proveedorService";
import { useDispatch } from "react-redux";
import {
  setProveedorSelected,
  setProveedores,
} from "../reducers/proveedorSlice";

const useProveedor = (id = null) => {
  const [loading, setLoading] = useState(true);
  const [proveedor, setProveedor] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (id) {
        const response = await proveedorService.getById(id);
        dispatch(setProveedorSelected(response));
        setProveedor(response);
        setLoading(false);
      } else {
        const response = await proveedorService.getAll();
        dispatch(setProveedores(response));
        setProveedor(response);
        setLoading(false);
      }
    })();
  }, []);

  return { loading, proveedor };
};

export default useProveedor;
