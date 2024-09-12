"use client";

import "../styles/contactanos.scss";

import * as React from "react";

// others
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

//input
import TextField from "@mui/material/TextField";

//button
import Button from "@mui/material/Button";

// Card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function ServicesPage() {
  return (
    <>
      {/*-----------------timbres Fiscales-----------------*/}
      <div className="container2" id="oscuro">
        {/* /*div */}
        <Box className="box" id="sect-1" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={5}>
            <Grid item xs={10} className="texto">
              <h2 className="text">Ubicación</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31416.41765804649!2d-67.964938!3d10.176412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8067e872cbe809%3A0x275668424e9ac22f!2sSecretar%C3%ADa%20de%20Hacienda%20del%20Estado%20Carabobo%20(siartec)!5e0!3m2!1ses!2sve!4v1725373473284!5m2!1ses!2sve"
                className="ubicacion"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
              <h2 className="text">Formulario de Contacto</h2>
            </Grid>

            <Grid item xs={6}>
              <Card className="consultar" sx={{ padding: "2rem" }}>
                <div className="consultar-content">
                  <CardContent className="consultar-space">
                    <h2 className="text">Formulario de Contacto</h2>
                  </CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth="true"
                        id="outlined-basic"
                        label="Nombre"
                        variant="outlined"
                        color="primary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth="true"
                        id="outlined-basic"
                        label="Correo"
                        variant="outlined"
                        sx={{}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth="true"
                        id="outlined-basic"
                        label="Mensaje"
                        variant="outlined"
                        sx={{}}
                      />
                    </Grid>
                    <div className="buttons">
                      <button className="btn-1 btn-oscuro">ENVIAR</button>
                    </div>
                  </Grid>
                </div>
              </Card>
            </Grid>

            <Grid item xs={6}></Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
