"use client";

import "../styles/servicios.scss";

import * as React from "react";

// others
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

// tabs
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

// Card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

//input
import TextField from "@mui/material/TextField";

//button
import Button from "@mui/material/Button";

//codes
// tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function ServiciosPage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/*-----------------timbres Fiscales-----------------*/}
      <div className="container2">
        {/* /*div */}
        <Box className="box" id="sect-1" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={5}>
            <Grid item xs={10} className="texto">
              <h2 className="text">Timbres Fiscales</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor odit vel, odio doloremque praesentium facere id harum,
                porro blanditiis, libero neque ipsum saepe rerum quas autem
                accusamus voluptatem veniam minus sunt molestias cumque numquam
                obcaecati optio. Consectetur minima nemo beatae at assumenda
                quibusdam recusandae omnis fugiat, explicabo unde voluptatum.
              </p>
            </Grid>

            <Grid item xs={5}>
              <div class="flip">
                <div class="front" id="back-1">
                  <h2 class="text-shadow">One</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={5}>
              <div class="flip" back>
                <div class="front" id="back-2">
                  <h2 class="text-shadow">Two</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div class="buttons">
                <button class="btn-1">Comprar Estampillas</button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/*-----------------1x1000-----------------*/}
      <div className="container2" id="oscuro">
        {/* /*div */}
        <Box className="box" id="sect-2" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={5}>
            <Grid item xs={10} className="texto">
              <h2 className="text">1x1000</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor odit vel, odio doloremque praesentium facere id harum,
                porro blanditiis, libero neque ipsum saepe rerum quas autem
                accusamus voluptatem veniam minus sunt molestias cumque numquam
                obcaecati optio. Consectetur minima nemo beatae at assumenda
                quibusdam recusandae omnis fugiat, explicabo unde voluptatum.
              </p>
            </Grid>

            <Grid item xs={3}>
              <div class="flip" back>
                <div class="front" id="back-3">
                  <h2 class="text-shadow">Two</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div class="flip" back>
                <div class="front" id="back-4">
                  <h2 class="text-shadow">Two</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div class="flip" back>
                <div class="front" id="back-5">
                  <h2 class="text-shadow">Three</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div class="buttons">
                <button class="btn-1 btn-oscuro">Declarar 1x1000</button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/*----------------Renta Minera------------------*/}
      <div className="container2">
        {/* /*div */}
        <Box className="box" id="sect-4" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={5}>
            {/* <Grid style={{backgroundColor:"red !important"}} item xs={10}   className="texto"> */}
            <Grid bg="secondary" item xs={10} className="texto">
              <h2 className="text">Renta Minera</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor odit vel, odio doloremque praesentium facere id harum,
                porro blanditiis, libero neque ipsum saepe rerum quas autem
                accusamus voluptatem veniam minus sunt molestias cumque numquam
                obcaecati optio. Consectetur minima nemo beatae at assumenda
                quibusdam recusandae omnis fugiat, explicabo unde voluptatum.
              </p>
            </Grid>

            <Grid item xs={3}>
              <div class="flip" back>
                <div class="front" id="back-8">
                  <h2 class="text-shadow">Three</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div class="flip" back>
                <div class="front" id="back-9">
                  <h2 class="text-shadow">Three</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div class="flip" back>
                <div class="front" id="back-10">
                  <h2 class="text-shadow">Three</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div class="buttons">
                <button class="btn-1">Pagar Renta</button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/*-----------------Guias de Circulación-----------------*/}
      <div className="container2" id="oscuro">
        {/* /*div */}
        <Box className="box" id="sect-3" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={5}>
            <Grid item xs={10} className="texto">
              <h2 className="text">Guias de Circulación</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor odit vel, odio doloremque praesentium facere id harum,
                porro blanditiis, libero neque ipsum saepe rerum quas autem
                accusamus voluptatem veniam minus sunt molestias cumque numquam
                obcaecati optio. Consectetur minima nemo beatae at assumenda
                quibusdam recusandae omnis fugiat, explicabo unde voluptatum.
              </p>
            </Grid>

            <Grid item xs={5}>
              <div class="flip" back>
                <div class="front" id="back-6">
                  <h2 class="text-shadow">Three</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={5}>
              <div class="flip" back>
                <div class="front" id="back-7">
                  <h2 class="text-shadow">Three</h2>
                </div>
                <div class="back">
                  <h3>Angular</h3>
                  <p>
                    Good tools make application development quicker and easier
                    to maintain than if you did everything by hand..
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div class="buttons">
                <button class="btn-1  btn-oscuro">Comprar Guias</button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      {``}
    </>
  );
}
