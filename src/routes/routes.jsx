import { createBrowserRouter } from "react-router-dom";
import ProveedorDetails from "../modules/proveedor/pages/ProveedorDetails";
import ProveedorList from "../modules/proveedor/pages/ProveedorList";
import ProveedorMovimientosList from "../modules/proveedor/pages/ProveedorMovimientosList";

const routes = createBrowserRouter([
  {
    path: "/proveedor/:id?",
    element: <ProveedorDetails />,
  },
  {
    path: "/proveedores",
    element: <ProveedorList />,
  },
  {
    path: "/movimientos/proveedor",
    element: <ProveedorMovimientosList />,
  },
]);

export { routes };
