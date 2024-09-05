"use client";

import "../styles/contactanos.scss";

import * as React from "react";

// others
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31416.41765804649!2d-67.964938!3d10.176412!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8067e872cbe809%3A0x275668424e9ac22f!2sSecretar%C3%ADa%20de%20Hacienda%20del%20Estado%20Carabobo%20(siartec)!5e0!3m2!1ses!2sve!4v1725373473284!5m2!1ses!2sve"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* /*div */}
        <Box className="box" id="sect-1" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={5}>
            <Grid item xs={10} className="texto">
              <h2 className="text">Formulario de Contacto</h2>
            </Grid>

            <Grid className="contact-content__input" item xs={4}>
              <TextField
                className="contact-input"
                id="standard-basic"
                label="Nombre"
                variant="standard"
              />
            </Grid>

            <Grid className="contact-content__input" item xs={4}>
              <TextField
                className="contact-input"
                id="standard-basic"
                label="Email"
                variant="standard"
              />
            </Grid>

            <Grid className="contact-content__input" item xs={8}>
              <TextField
                className="contact-input"
                id="standard-basic"
                label="Mensaje"
                variant="standard"
              />
            </Grid>

            <Grid item xs={12}>
              <div class="buttons">
                <button class="btn-1 btn-oscuro">ENVIAR</button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
