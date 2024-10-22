"use client";
<<<<<<< HEAD

import { Box, Grid, Paper, Button } from "@mui/material";
=======
import "../../../styles/app/generar/generar.scss";
import { Box, Grid, Paper } from "@mui/material";
>>>>>>> 7ed64d1db9e0577794927b9110ffb70c77645d34
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
