"use client";
import "../../../styles/app/generar/generar.scss";
import jsonData from "../../../../../public/data.json";

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
  const [contribuyents, setContribuyents] = useState([]);

  //mejoras
  const ent = jsonData["entes"];
  const subEnt = jsonData["subEntes"];
  const tramites = jsonData["Tramites"];

  const [prueba, setPrueba] = useState("");
  /*
  const getData = async () => {
    await fetch("../../data.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.entes[0].id);
        console.log("-----------");
        if (json.entes[0].id !== 1) {
          setPrueba("no Existe");
          return;
        }
        setPrueba(json.entes[0].name);
      });
  };
*/
  const getData = async () => {
    await fetch("../../data.json")
      .then((response) => response.json())
      .then((json) => {
        for (let i = 0; i < json.entes.length; i++) {
          console.log(json.entes[i].id);
          console.log("-----------");
        }
        //console.log(json.entes.length);
        console.log("xxxxxxxxxxx");
        //probar desde acá
        if (json.entes[0].id !== 1) {
          setPrueba("no Existe");
          return;
        }
        setPrueba(json.entes[0].name);
      });
  };

  getData();

  return (
    <>
      {prueba}
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
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="ente">Ente</InputLabel>
              <Select
                labelId="ente"
                id="ente-select"
                value={ente}
                label="ente"
                onChange={(e) => setEnte(e.target.value)}
              >
                {ent.map((item) => (
                  // debería enviar el id
                  // <MenuItem value={item["id"]}>{item["name"]}</MenuItem>
                  <MenuItem value={item["id"]}>{item["name"]}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="subEnte">Sub Ente</InputLabel>
              <Select
                labelId="subEnte"
                id="subEnte-select"
                value={subEnte}
                label="subEnte"
                onChange={(e) => setSubEnte(e.target.value)}
              >
                {}
                {subEnt.map((item) => (
                  <MenuItem value={item["id"]}>{item["name"]}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="tramite">tramite</InputLabel>
              <Select
                labelId="tramite"
                id="tramite"
                value={tramite}
                label="tramite"
                onChange={(e) => setTramite(e.target.value)}
              >
                {tramites.map((item) => (
                  // debería enviar el id
                  // <MenuItem value={item["id"]}>{item["name"]}</MenuItem>
                  <MenuItem value={item["id"]}>{item["name"]}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <div className="buttons">
              <Button
                variant="contained"
                onClick={() => {
                  setContribuyents([
                    ...contribuyents,
                    {
                      id: nextId++,
                      ente: ente,
                      subEnte: subEnte,
                      tramite: tramite,
                    },
                  ]);
                  console.log(nextId);
                  console.log(ente);
                  console.log(subEnte);
                  console.log(tramite);
                }}
              >
                Añadir
              </Button>
            </div>
          </Grid>

          <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
            Destino(s) de la Estampilla
          </Divider>
          <Grid item xs={12}>
            {" "}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Ente</StyledTableCell>
                    <StyledTableCell align="right">Sub Ente</StyledTableCell>
                    <StyledTableCell align="right">Trámite</StyledTableCell>
                    <StyledTableCell align="right">Monto</StyledTableCell>
                    <StyledTableCell align="right">Eliminar</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contribuyents.map((row) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.ente}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.subEnte}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.tramite}
                      </StyledTableCell>
                      <StyledTableCell align="right">209.3</StyledTableCell>
                      <StyledTableCell align="right">cuadrito</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
            Información adicional
          </Divider>
          <Grid item xs={10}>
            <TextField
              color="secondary"
              value="209.87"
              type="text"
              fullWidth
              label="Monto a Pagar"
            />
          </Grid>
          <Grid item xs={1}>
            <div className="buttons">
              <Button variant="contained">Comprar</Button>
            </div>
          </Grid>
          <Grid item xs={1}>
            <div className="buttons">
              <Button variant="contained">Generar</Button>
            </div>
          </Grid>
        </Grid>
      </Box>

      {``}
    </>
  );
}
