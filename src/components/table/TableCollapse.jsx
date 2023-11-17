import { Collapse, TableCell, TableRow,Typography,Box, Table, TableHead } from "@mui/material";
import React from "react";

const TableCollapse = ({ open, item, title, columnas, filas }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box sx={{ margin: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
          {title}
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              {columnas.map((columna) => {
                <TableCell>{columna}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {filas.map((fila) => {
              return (
                <TableCell key={fila} align="left">
                  {item[fila]}
                </TableCell>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Collapse>
  );
};

export default TableCollapse;
