import React, { useState } from "react";
import SelectList from "./SelectList";

import Grid from "@mui/material/Grid";
import { Button, Divider } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
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

let nextId = 0;
const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");
  const [contribuyents, setContribuyents] = useState([]);

  return (
    <Grid className="grid" container spacing={3}>
      <Grid item xs={3}>
        <SelectList
          title="ente"
          url={`../../json/ente.json`}
          handleChange={(e) => {
            setState(e.target.value);
          }}
        />
      </Grid>
      {state && (
        <Grid item xs={4}>
          <SelectList
            title="subEnte"
            url={`../../json/subEntes/${state}.json`}
            handleChange={(e) => {
              setTown(e.target.value);
            }}
          />
        </Grid>
      )}

      {state && (
        <Grid item xs={3}>
          <SelectList
            title="tramites"
            url={`../../json/tramites/${state}.json`}
            handleChange={(e) => {
              setSuburb(e.target.value);
            }}
          />
        </Grid>
      )}

      {suburb && town && (
        <Grid item xs={1}>
          <div className="buttons">
            <Button
              variant="contained"
              onClick={() => {
                setContribuyents([
                  ...contribuyents,
                  {
                    id: nextId++,
                    ente: state,
                    subEnte: town,
                    tramite: suburb,
                  },
                ]);

                console.log(state);
                console.log(town);
                console.log(suburb);
              }}
            >
              Añadir
            </Button>
          </div>
        </Grid>
      )}

      <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
        Destino(s) de la Estampilla
      </Divider>
      <Grid item xs={12}>
        {" "}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nro.</StyledTableCell>
                <StyledTableCell align="right">Ente</StyledTableCell>
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
                    {row.id + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.ente}</StyledTableCell>
                  <StyledTableCell align="right">{row.subEnte}</StyledTableCell>
                  <StyledTableCell align="right">{row.tramite}</StyledTableCell>
                  <StyledTableCell align="right">209.3</StyledTableCell>
                  <StyledTableCell align="right">cuadrito</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default SelectsAnidados;
