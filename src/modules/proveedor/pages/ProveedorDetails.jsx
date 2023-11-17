import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProveedorForm from "../components/ProveedorForm";
import StatusQuery from "../../../components/StatusQuery";
import StatusLoading from "../../../components/StatusLoading";

const links = [{url:"/proveedor", text: "Crear un proveedor"},{url:"/proveedorList",text:"Ver Proveedores"}]

const ProveedorDetails = () => {
  const { id } = useParams();
  const [status, setStatus] = useState({status:"ready",message:""});

  switch (status.status) {
    case "loading":
      return <StatusLoading message={"cargando"} />;

    case "error":
      return <StatusQuery  />;
    case "success":
      return (
        <StatusQuery
          message={
            id ? "Proveedor editado con éxito" : "Proveedor creado con éxito"
          }
          links={links}
        />
      );

    default:
      return <ProveedorForm id={id} setStatus={setStatus} />;
  }
};

export default ProveedorDetails;
