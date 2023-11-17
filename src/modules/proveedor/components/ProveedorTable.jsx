import React from "react";
import proveedorTableHOC from "./proveedorTableHOC";
import {
  Tabla,
  TableTooltip,
  TableTextFilter,
  GridContainer,
} from "../../../components";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProveedorSelected } from "../reducers/proveedorSlice";
import { setModal } from "../../../store/belieSlice";

const columnas = ["Nombre", "Codigo", "Deuda"];
const filas = ["nombre", "codigo", "deuda"];

const TableHeader = ({ setFilterValue }) => {
  return (
    <>
      <GridContainer justifyContent="space-between">
        <Grid item xs={3}>
          <TableTextFilter label="Buscar" onFilterChange={setFilterValue} />
        </Grid>
      </GridContainer>
    </>
  );
};

const RowActionButtons = ({ rowData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editProveedor = (rowData) => {
    dispatch(setProveedorSelected(rowData));
    dispatch(setModal({ isOpen: true, display: "proveedor" }));
  };

  const generatePago = (rowData) => {
    dispatch(setProveedorSelected(rowData));
    dispatch(setModal({ isOpen: true, display: "pago" }));
  };

  const verMovimientos = (rowData) => {
    dispatch(setProveedorSelected(rowData));
    navigate(`/movimientos/proveedor`);
  };

  return (
    <>
      <TableTooltip
        title="Editar"
        onClick={() => editProveedor(rowData)}
        icon="edit"
      />
      <TableTooltip
        title="Eliminar"
        onClick={() => editProveedor(rowData)}
        icon="delete"
      />
      <TableTooltip
        title="Generar pago"
        onClick={() => generatePago(rowData)}
        icon="money"
      />
      <TableTooltip
        title="Ver movimientos"
        onClick={() => verMovimientos(rowData)}
        icon="file"
      />
    </>
  );
};

const ProveedorTable = proveedorTableHOC(
  ({ proveedores, filterFn, setFilterValue }) => {
    return (
      <Tabla
        count={proveedores.length}
        filas={filas}
        columnas={columnas}
        RowActionButtons={RowActionButtons}
        filterFn={filterFn(proveedores)}
        Header={<TableHeader setFilterValue={setFilterValue} />}
        defaultOrderBy={"nombre"}
      ></Tabla>
    );
  }
);

export default ProveedorTable;
