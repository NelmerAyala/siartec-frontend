"use client";
import "../../../styles/app/generar/generar.scss";
import SelectAnidados from "@/components/app/SelectAnidados";

import * as React from "react";

import { useState } from "react";
let nextId = 0;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Divider,
  Select,
  TextField,
  Button,
} from "@mui/material";

//table

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CreateTaxStamps() {
  ///prueba
  const [ente, setEnte] = useState("");
  const [subEnte, setSubEnte] = useState("");
  const [tramite, setTramite] = useState("");
  // const [contribuyents, setContribuyents] = useState([]);

  return (
    <>
      <Box className="box" id="sect-2" sx={{ flexGrow: 1, padding: "2rem" }}>
        <Grid className="grid" container spacing={3}>
          <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
            Datos del Contribuyentes
          </Divider>
          <Grid item xs={12}>
            <TextField
              color="secondary"
              value="Carlos Cárdenas"
              type="text"
              fullWidth
              label="Nombre"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              color="secondary"
              value="28465203"
              type="text"
              fullWidth
              label="Rif/Cédula"
            />
          </Grid>

          <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
            Seleccione Destino de la Estampilla
          </Divider>
          {/* <ul>{entesList}</ul> */}
        </Grid>

        <SelectAnidados />
      </Box>
    </>
  );
}
