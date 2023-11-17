import { TextField } from "@mui/material";

const TableTextFilter = ({ label, onFilterChange }) => {
  return (
    <>
      <TextField
        variant="standard"
        label={label}
        onChange={(e) => {
          onFilterChange(e.target.value);
        }}
      />
    </>
  );
};
export default TableTextFilter;
