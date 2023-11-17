import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const proveedorTableHOC = (Component) => {
  return (props) => {
    const [filterValue, setFilterValue] = useState("");
    const proveedores = useSelector(
      (state) => state.proveedorReducer.allProveedores
    );

    // Funcion que se le pasa a la tabla para qe renderize el contenido
    // y a la vez filtre en base al texto de busqueda
    const filterProveedor = useCallback(
      (proveedores) => {
        return proveedores.filter(
          (item) =>
            item.nombre.toUpperCase().includes(filterValue.toUpperCase()) ||
            item.codigo.toUpperCase().includes(filterValue.toUpperCase())
        );
      },
      [proveedores, filterValue]
    );

    return (
      <Component
        {...props}
        proveedores={proveedores}
        filterFn={filterProveedor}
        setFilterValue={setFilterValue}
      />
    );
  };
};

export default proveedorTableHOC;
