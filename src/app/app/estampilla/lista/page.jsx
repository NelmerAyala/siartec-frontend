"use client";
import "../../../styles/app/generar/generar.scss";
import { Box, Grid, Paper } from "@mui/material";
import TableListTaxStamps from "./table";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function ListTaxStamps() {
  return (
    <>
      <Box
        sx={{
          padding: 5,
        }}
      >
        <TableListTaxStamps />
      </Box>
    </>
  );
}
