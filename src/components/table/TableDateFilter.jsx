import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React from "react";
import GridContainer from "../GridContainer";
import { Grid } from "@mui/material";

const TableDateFilter = () => {
  return (
    <>
      <DatePicker defaultValue={dayjs("2023-11-06")} label="Desde" />
      <DatePicker defaultValue={dayjs("2023-11-30")} label="Hasta" />
    </>
  );
};

export default TableDateFilter;
