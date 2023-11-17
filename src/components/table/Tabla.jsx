import React, { useState } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import GridContainer from "../GridContainer";
import TablaRow from "./TablaRow";

const Tabla = ({
  columnas,
  filas,
  RowActionButtons,
  filterFn,
  Header,
  defaultOrderBy,
}) => {
  const opcionesFPP = [10, 5, 15];
  const [filasPorPagina, setFilasPorPagina] = useState(opcionesFPP[0]);
  const [pagina, setPagina] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(defaultOrderBy);

  // EVENTOS DE PAGINACION FUNCIONES DE PAGINADO
  const handleCambiarPagina = (e, nuevaPagina) => {
    setPagina(nuevaPagina);
  };

  const handleCambiarFilasPorPagina = (e) => {
    setFilasPorPagina(parseInt(e.target.value, 10));
    setPagina(0);
  };

  //Evento de ordenamiento de columnas
  const handleOrdenamientoColumnas = (columna) => {
    setOrderBy(columna.toLowerCase());
    setOrder(order === "asc" ? "desc" : "asc");
  };

  //FUNCIONES DE ORDENAMIENTO DE COLUMNAS ASCENDIENTE O DESCENDIENTE
  const comparadorDescendiente = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparador = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => comparadorDescendiente(a, b, orderBy)
      : (a, b) => -comparadorDescendiente(a, b, orderBy);
  };

  const ordenarColumna = (array, comparador) => {
    const arrayOrdenado = array.map((el, index) => [el, index]);
    arrayOrdenado.sort((a, b) => {
      const ordenado = comparador(a[0], b[0], orderBy);
      if (ordenado !== 0) {
        return ordenado;
      }
      return a[1] - b[1];
    });
    return arrayOrdenado.map((el) => el[0]);
  };

  const filasVisibles = () => {
    return ordenarColumna(filterFn, getComparador(order, orderBy)).slice(
      pagina * filasPorPagina,
      (pagina + 1) * filasPorPagina
    );
  };

  return (
    <GridContainer>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {Header}
      </Grid>
      <Grid item xs={12}>
        <TableContainer>
          <Table aria-label="table" size="small">
            <TableHead sx={{ backgroundColor: "secondary.main" }}>
              <TableRow>
                {columnas.map((item) => {
                  return (
                    <TableCell key={item} align="left" sortDirection={order}>
                      <TableSortLabel
                        active={orderBy === item.toLowerCase()}
                        direction={order === "asc" ? "desc" : "asc"}
                        onClick={() => handleOrdenamientoColumnas(item)}
                      >
                        {item}
                      </TableSortLabel>
                    </TableCell>
                  );
                })}
                {RowActionButtons && (
                  <TableCell align="center">Acciones</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {filasVisibles().map((item) => (
                <TablaRow
                  item={item}
                  filas={filas}
                  RowActionButtons={RowActionButtons}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={filterFn.length}
          labelDisplayedRows={({ from, to, count }) =>
            `${from}–${to} de ${count !== -1 ? count : `mas que ${to}`}`
          }
          page={pagina}
          rowsPerPageOptions={opcionesFPP}
          rowsPerPage={filasPorPagina}
          onPageChange={handleCambiarPagina}
          onRowsPerPageChange={(e) => handleCambiarFilasPorPagina(e)}
          labelRowsPerPage={"Filas por página"}
        ></TablePagination>
      </Grid>
    </GridContainer>
  );
};

export default Tabla;
