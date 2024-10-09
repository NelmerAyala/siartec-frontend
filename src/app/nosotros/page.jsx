"use client";

import "../styles/nosotros.scss";

import * as React from "react";

// others
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

// tabs

import Typography from "@mui/material/Typography";

//codes
// tabs

export default function ServiciosPage() {
  return (
    <>
      {/*-----------------timbres Fiscales-----------------*/}
      <div className="container2">
        {/* /*div */}
        <Box className="box" id="sect-1" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={5}>
            <Grid item xs={12} className="texto">
              <h2 className="text">SIARTEC</h2>

              <p>
                Se crea con el objeto de realizar un seguimiento automatizado de
                las operaciones de recaudación de los tributos del Estado
                Carabobo, su principal función es ayudar y facilitar el proceso
                de los contribuyentes al momento de declarar los tributos.
              </p>

              <p>
                Y como herramienta requerida para el efectivo cumplimiento del
                pago de los tributos, basado en los principios de atención
                oportuna, respuesta efectiva, trato equitativo, respeto,
                amabilidad, puntualidad, veracidad y legalidad.
              </p>

              <br />

              <div class="buttons">
                <button class="btn-1">Ingresar al Sistema</button>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div class="flip">
                <div class="front" id="back-1">
                  <h2 class="text-shadow">MISIÓN</h2>
                </div>
                <div class="back">
                  <p>
                    Fomentar la cultura tributaria para fortalecer e incrementar
                    los ingresos estadales por concepto de ramos tributarios, de
                    acuerdo a los lineamientos emanados del Ejecutivo Regional,
                    fundamentados en los preceptos constitucionales vigentes y
                    en los principios que rigen el funcionamiento de la
                    Administración Pública Nacional
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div class="flip" back>
                <div class="front" id="back-2">
                  <h2 class="text-shadow">VISIÓN</h2>
                </div>
                <div class="back">
                  <p>
                    Ser un Órgano de referencia nacional en ejecución de las
                    actividades inherentes a la recaudación, verificación y
                    fiscalización en los diversos ramos tributarios estadales,
                    con un equipo de alto desempeño, coadyuvando en la gestión a
                    favor de todos los carabobeños.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div class="flip" back>
                <div class="front" id="back-3">
                  <h2 class="text-shadow">VALORES</h2>
                </div>
                <div class="back">
                  <p>
                    Honestidad, transparencia, pasión, diferenciación,
                    orientación al cliente, calidad y responsabilidad social.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
