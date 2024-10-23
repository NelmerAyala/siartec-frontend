"use client";
import "../../../styles/app/generar/generar.scss";
import { Box, Button, Grid, Paper } from "@mui/material";
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
      <Grid className="grid" container spacing={5}>
        <Grid item marginLeft={5} xs={2}>
          <div className="buttons">
            <Button variant="contained">Comprar</Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
