//import React, { useState } from "react";
import * as React from "react";
import SelectList from "./selectList";

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
import { TextField } from "@mui/material";

//Modal
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

//select
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  borderRadius: "7px",
  boxShadow: 24,
  p: 4,
};

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

let indexUnique = parseInt(Math.random() * 10000);
console.log("indexUnique: " + indexUnique);
let nextId = indexUnique;
let montoInical = 0;

const SelectsAnidados = () => {
  const [state, setState] = React.useState("");
  const [town, setTown] = React.useState("");
  const [suburb, setSuburb] = React.useState("");
  const [bank, setBank] = React.useState("");
  let [contribuyents, setContribuyents] = React.useState([]);

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //modal Select
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleChangeSelected = (event) => {
    setSelectedValue(event.target.value);
  };

  const [phoneCode, setPhoneCode] = React.useState("");
  const handlePhoneCode = (event) => {
    setPhoneCode(event.target.value);
  };

  const [docType, setDocType] = React.useState("");
  const handleChangeDocType = (event) => {
    setDocType(event.target.value);
  };

  //no debería estar

  let [suma, setSuma] = React.useState("");
  const handleChangeSuma = (event) => {
    setSuma(event.target.value);
  };

  //console.clear()

  const deleteItem = (id) => {
    console.log(id);
    const deleteEst = contribuyents.filter(
      (contribuyent) => contribuyent.id !== id
    );
    setContribuyents(deleteEst);
  };

  let valorUCD = 199;
  let montoTotal = contribuyents.length * valorUCD;
  suma = montoInical + montoTotal;
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
                <StyledTableCell align="center">Eliminar</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contribuyents.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.ente}</StyledTableCell>
                  <StyledTableCell align="right">{row.subEnte}</StyledTableCell>
                  <StyledTableCell align="right">{row.tramite}</StyledTableCell>
                  <StyledTableCell align="right">199</StyledTableCell>
                  <StyledTableCell align="center">
                    <a href={"#" + row.id} onClick={() => deleteItem(row.id)}>
                      X
                    </a>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
        Información adicional
      </Divider>
      <Grid item xs={5}>
        <TextField
          color="secondary"
          value={suma / valorUCD}
          type="text"
          fullWidth
          label="Cant. de Estampillas"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          color="secondary"
          value={suma}
          type="text"
          fullWidth
          label="Monto a Pagar"
        />
      </Grid>
      {suma !== 0 ? (
        <Grid item xs={1}>
          <div className="buttons">
            <Button onClick={handleOpen} variant="contained">
              Comprar
            </Button>
          </div>
        </Grid>
      ) : (
        <></>
      )}
      {suma !== 0 ? (
        <Grid item xs={1}>
          <div className="buttons">
            <Button variant="contained">Generar</Button>
          </div>
        </Grid>
      ) : (
        <></>
      )}
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ingrese sus Datos de Cuenta para Pagar
          </Typography>
          <Grid className="grid" container spacing={3}>
            <Grid item xs={12}>
              <SelectList
                title="banco"
                url={`../../json/bancos/bancos.json`}
                handleChange={(e) => {
                  setBank(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Seleccione..
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    control={<Radio />}
                    label="Nro. de Teléfono"
                    checked={selectedValue === "a"}
                    onChange={handleChangeSelected}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Nro. de Cuenta"
                    checked={selectedValue === "b"}
                    onChange={handleChangeSelected}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {selectedValue == "a" ? (
              <Grid item xs={3}>
                <FormControl fullWidth>
                  {/* <InputLabel>Código</InputLabel> */}
                  <InputLabel id="demo-simple-select-helper-label">
                    Código Phone
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={docType}
                    label="Tipo de Documento"
                    onChange={handleChangeDocType}
                  >
                    <MenuItem value={414}>0414</MenuItem>
                    <MenuItem value={424}>0424</MenuItem>
                    <MenuItem value={412}>0412</MenuItem>
                    <MenuItem value={416}>0416</MenuItem>
                  </Select>
                  <br />
                </FormControl>
              </Grid>
            ) : (
              <></>
            )}

            {selectedValue == "a" ? (
              <Grid item xs={9}>
                <TextField
                  color="secondary"
                  type="number"
                  fullWidth
                  // corregir y agregar debajo
                  label="Número de Teléfono"
                  maxLength="7"
                />
              </Grid>
            ) : (
              <></>
            )}

            {selectedValue == "b" ? (
              <Grid item xs={12}>
                <TextField
                  color="secondary"
                  type="text"
                  fullWidth
                  // corregir y agregar debajo
                  label="Número de Cuenta"
                />
              </Grid>
            ) : (
              <></>
            )}

            <Grid item xs={3}>
              <FormControl fullWidth>
                {/* <InputLabel>Código</InputLabel> */}
                <InputLabel id="demo-simple-select-helper-label">
                  Tipo de Documento
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={phoneCode}
                  label="Phone"
                  onChange={handlePhoneCode}
                >
                  <MenuItem value={"V"}>V</MenuItem>
                  <MenuItem value={"E"}>E</MenuItem>
                  <MenuItem value={"J"}>J</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
                <br />
              </FormControl>
            </Grid>
            <Grid item xs={9}>
              <TextField
                color="secondary"
                type="text"
                fullWidth
                label="Nro de Documento"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="secondary"
                type="text"
                fullWidth
                label="Monto"
                value={suma}
              />
            </Grid>
            <Grid item xs={1}>
              <div className="buttons">
                <Button onClick={handleOpen} variant="contained">
                  Pagar
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

export default SelectsAnidados;
