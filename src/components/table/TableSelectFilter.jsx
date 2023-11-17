import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const TableSelectFilter = ({ label, options, onChange, value }) => {
  return (
    <Autocomplete
      fullWidth
      disablePortal
      disableClearable
      options={options}
      onChange={(e,v) => onChange(v)}
      value={value}
      getOptionLabel={(option) => option.nombre}
      renderInput={(params) => (
        <TextField {...params} label={label}/>
      )}
    />
  );
};

export default TableSelectFilter;
