import { useMemo, useState } from "react";
import useMovimientos from "../../movimientos/hooks/useMovimientos";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setProveedorSelected } from "../reducers/proveedorSlice";

const movimientosProveedorHoc = (Component) => {
  return (props) => {
    const dispatch = useDispatch();
    const { movimientos } = useMovimientos("proveedor");
    const proveedores = useSelector(
      (state) => state.proveedorReducer.allProveedores
    );
    const proveedor = useSelector(
      (state) => state.proveedorReducer.proveedorSelected
    );
    const [filterDate, setFilterDate] = useState({
      from: dayjs("2023-11-01"),
      to: dayjs("2023-11-31"),
    });
    const onChangeProveedor = (e) => {
      dispatch(setProveedorSelected(e));
    };

    // Funcion que se le pasa a la tabla para qe renderize el contenido
    const filterMovimientos = useMemo(() => {
      return movimientos.filter((item) => item.entidad._id === proveedor._id);
    }, [movimientos, proveedor]);

    return filterMovimientos?.length > 0 ? (
      <Component
        {...props}
        filterFn={filterMovimientos}
        onChangeProveedor={onChangeProveedor}
        filterOptions={proveedores}
        setFilterDate={setFilterDate}
        defaultProveedor={proveedor}
      />
    ) : (
      <>{`Aun no hay movimientos para este proveedor`}</>
    );
  };
};

export default movimientosProveedorHoc;
