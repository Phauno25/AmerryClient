import { TableCell, TableRow } from "@mui/material";
import React from "react";

const TablaRow = ({item,filas,RowActionButtons}) => {
  return (
    <TableRow
      key={item._id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {filas.map((fila) => {
        return (
          <TableCell key={fila} align="left">
            {item[fila]}
          </TableCell>
        );
      })}

      {RowActionButtons && (
        <TableCell align="center">
          <RowActionButtons rowData={item} />
        </TableCell>
      )}
    </TableRow>
  );
};

export default TablaRow;
