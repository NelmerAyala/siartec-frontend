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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor odit vel, odio doloremque praesentium facere id harum,
                porro blanditiis, libero neque ipsum saepe rerum quas autem
                accusamus voluptatem veniam minus sunt molestias cumque numquam
                obcaecati optio. Consectetur minima nemo beatae at assumenda
                quibusdam recusandae omnis fugiat, explicabo unde voluptatum.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam ut, quo recusandae adipisci quidem, sunt itaque
                    cum aut soluta tempora ducimus temporibus dolore quis
                    eveniet enim nobis nulla iste. Voluptatibus, debitis.
                    Assumenda aspernatur nam dolor distinctio aliquam molestiae,
                    vel eos.
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
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum sit amet et soluta, saepe voluptates animi, iste
                    quam harum quasi ut debitis, consequatur minima cum vitae
                    accusamus temporibus vero maiores natus error quaerat.
                    Rerum, deleniti.
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
