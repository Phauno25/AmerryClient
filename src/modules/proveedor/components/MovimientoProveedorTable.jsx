import React from "react";
import {
  Tabla,
  TableSelectFilter,
  TableDateFilter,
  TableTooltip,
  GridContainer,
} from "../../../components";
import movimientosProveedorHoc from "./movimientosProveedorHoc";
import { Grid } from "@mui/material";

const columnas = [
  "Fecha",
  "Categoria",
  "Descripcion",
  "Monto",
  "Deuda anterior",
  "Deuda actual",
];
const filas = [
  "fecha",
  "tipoMovimiento",
  "descripcion",
  "monto",
  "valorAnterior",
  "valorActual",
];

const TableHeader = ({
  setFilterDate,
  filterOptions,
  onChangeProveedor,
  defaultProveedor,
}) => {
  return (
    <GridContainer justifyContent="space-between">
      <Grid item xs={3}>
        <TableSelectFilter
          onChange={onChangeProveedor}
          options={filterOptions}
          value={defaultProveedor}
        />
      </Grid>
      <Grid item xs={6}>
        <TableDateFilter onDateChange={setFilterDate} />
      </Grid>
    </GridContainer>
  );
};

const RowActions = ({ rowData }) => {
  return (
    <>
      <TableTooltip
        title="Ver Detalle"
        onClick={() => editProveedor(rowData._id)}
        icon="file"
      />
    </>
  );
};

const MovimientosProveedorTable = movimientosProveedorHoc(
  ({
    filterFn,
    onChangeProveedor,
    filterOptions,
    filterDate,
    defaultProveedor,
  }) => {
    return (
      <Tabla
        count={filterFn.lenght}
        filas={filas}
        columnas={columnas}
        RowActions={RowActions}
        filterFn={filterFn}
        Header={
          <TableHeader
            onChangeProveedor={onChangeProveedor}
            filterOptions={filterOptions}
            setFilterDate={filterDate}
            defaultProveedor={defaultProveedor}
          />
        }
      />
    );
  }
);

export default MovimientosProveedorTable;
