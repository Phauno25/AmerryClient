import { Icon, IconButton, Tooltip } from "@mui/material";
import React from "react";

const TableTooltip = ({ title, onClick, icon }) => {
  return (
    <Tooltip title={title}>
      <IconButton variant="contained" onClick={onClick}>
        <Icon fontSize="large" color="primary">
          {icon}
        </Icon>
      </IconButton>
    </Tooltip>
  );
};

export default TableTooltip;
