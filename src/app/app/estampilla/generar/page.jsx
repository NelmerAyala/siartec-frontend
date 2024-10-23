"use client";
import * as React from "react";
import "../../../styles/app/generar/generar.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider, TextField } from "@mui/material";
import SelectsAnidados from "@/components/app/selectAnidados";
//table

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getProfiledUser } from "@/services/user/get-profile-services";
import { getSession } from "next-auth/react";
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
  const [ente, setEnte] = React.useState("");
  const [subEnte, setSubEnte] = React.useState("");
  const [tramite, setTramite] = React.useState("");
  const [profileUser, setprofileUser] = React.useState({
    fullname: "",
    identity_document_letter: "",
    identity_document: "",
  });
  // const [contribuyents, setContribuyents] = React.useState([]);

  const sendRequest = async () => {
    let data = await getProfiledUser(await getSession());
    console.log(data);
    if (data) setprofileUser(data);
  };
  React.useEffect(() => {
    sendRequest();
  }, []);
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
              value={profileUser.fullname}
              type="text"
              fullWidth
              label="Nombres y Apellidos / Razón social"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              color="secondary"
              value={`${profileUser.identity_document_letter}-${profileUser.identity_document}`}
              type="text"
              fullWidth
              label="Rif/Cédula"
            />
          </Grid>

          <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
            Seleccione Destino de la Estampilla
          </Divider>
        </Grid>

        <SelectsAnidados />
      </Box>
    </>
  );
}
