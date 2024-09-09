"use client";

import "../styles/index.scss";

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

export default function NosotrosPage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container2">
        {/* /*div */}

        <Box className="box" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={2}>
            <Grid item xs={12} md={5} className="texto">
              <h2 className="text">SIARTEC</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor odit vel, odio doloremque praesentium facere id harum,
                porro blanditiis, libero neque ipsum saepe rerum quas autem
                accusamus voluptatem veniam minus sunt molestias cumque numquam
                obcaecati optio. Consectetur minima nemo beatae at assumenda
                quibusdam recusandae omnis fugiat, explicabo unde voluptatum.
              </p>

              <div class="buttons">
                <button class="btn-1">Ingresar al Sistema</button>
              </div>
            </Grid>

            <Grid item xs={12} md={7}>
              <Box
                component="img"
                className="img-banner"
                alt="The house from the offer."
                src="img/bg/bg-1.png"
              />
            </Grid>
            {/* 
                                Ejemplo de manejo en distindos contextos
                                <Grid item display={{xs: 'none'}}>
                                    <Item>xs=4</Item>
                                </Grid>
                                <Grid item xs={4}>
                                    <Item>xs=4</Item>
                                </Grid> 
                */}
          </Grid>
        </Box>
      </div>
      {/*-----------------Background #1-----------------*/}
      <section id="bg-1" class="bg">
        <div class="inner">
          <div class="copy">
            <h2>¿Cómo pagar en línea?</h2>
            <p>
              Con el sistema SIARTEC por medio de la plataforma de pago online
              de 100% banco puedes pagar los tributos desde la comodidad de tu
              hogar
            </p>
          </div>
        </div>
      </section>

      {/*-----------------TRIBUTOS-----------------*/}
      <div className="container2">
        <Box className="box" sx={{ flexGrow: 1 }}>
          <h2 className="text">Tributos</h2>
          <p>Listado de tributos que se pagan en por medio de Siartec..</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            sint laborum consequatur laboriosam saepe a quod? Quidem possimus
            eaque assumenda explicabo dolore tempora. Aperiam eos optio aliquid
            a. Dolore eius dignissimos reprehenderit ullam possimus repellendus
            sed voluptas officia neque, harum vitae corrupti autem quaerat
            necessitatibus, fuga voluptate rerum repudiandae corporis..
          </p>
          <Grid className="grid" container spacing={5}>
            <Grid item xs={5}>
              <div
                class="card"
                style={{ backgroundImage: "url('img/bg/bg-2.png')" }}
              >
                <div class="content">
                  <h2 class="title">Timbres Fiscales</h2>
                  <p class="copy">
                    Check out all of these gorgeous mountain trips with
                    beautiful views of, you guessed it, the mountains
                  </p>
                  <button class="btn-2">ver más</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div
                class="card"
                style={{ backgroundImage: "url('img/bg/bg-3.png')" }}
              >
                <div class="content">
                  <h2 class="title">1x1000</h2>
                  <p class="copy">
                    Check out all of these gorgeous mountain trips with
                    beautiful views of, you guessed it, the mountains
                  </p>
                  <button class="btn-2">ver más</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div
                class="card"
                style={{ backgroundImage: "url('img/bg/bg-4.png')" }}
              >
                <div class="content">
                  <h2 class="title">Renta Minera</h2>
                  <p class="copy">
                    Check out all of these gorgeous mountain trips with
                    beautiful views of, you guessed it, the mountains
                  </p>
                  <button class="btn-2">ver más</button>
                </div>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div
                class="card"
                style={{ backgroundImage: "url('img/bg/bg-5.png')" }}
              >
                <div class="content">
                  <h2 class="title">Guias de Circulacion</h2>
                  <p class="copy">
                    Check out all of these gorgeous mountain trips with
                    beautiful views of, you guessed it, the mountains
                  </p>
                  <button class="btn-2">ver más</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/*-----------------Background #2-----------------*/}
      <section id="bg-2" class="bg">
        <div class="inner">
          <div class="copy">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              repudiandae vel nesciunt soluta quia veritatis.
            </p>
          </div>
        </div>
      </section>

      <div className="container2">
        {/*-----------------Informacion-----------------*/}
        <Box className="box" sx={{ flexGrow: 1 }}>
          <h2 className="text">Información Importante</h2>

          <Grid className="grid" container spacing={5}>
            <Grid item xs={3}>
              <Card className="consultar">
                <div className="consultar-content">
                  <CardContent className="consultar-space">
                    <h2 className="text-oscuro">Búsqueda de Planillas</h2>
                    <p>Por favor rellene el formulario</p>
                  </CardContent>
                  <CardActions className="consultar-space">
                    <div className="">
                      <TextField
                        id="outlined-basic"
                        label="Cédula"
                        variant="outlined"
                      />
                    </div>
                    <div className="">
                      <TextField
                        id="outlined-basic"
                        label="Nro Timbre"
                        variant="outlined"
                      />
                    </div>
                    <Button className="btn-1" variant="contained">
                      Consultar
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <AppBar className="cardImportant" position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  backgroundColor="negro"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Bancos" {...a11yProps(0)} />
                  <Tab label="Valor de la UCD" {...a11yProps(1)} />

                  <Tab label="Nros. Contacto" {...a11yProps(2)} />
                  <Tab label="Correos" {...a11yProps(3)} />
                </Tabs>
              </AppBar>
              <TabPanel
                className="cardImportant-panel"
                value={value}
                index={0}
                dir={theme.direction}
              >
                <div className="card-content">
                  <p>
                    <span>BANCO NACIONAL DE CREDITO</span> 0241-874.34.70
                  </p>
                  <p>
                    <span>BANCRECER </span> 0241-874.34.64
                  </p>
                  <p>
                    <span>BANCO DE VENEZUELA </span> 0241-874.34.64
                  </p>
                  <p>
                    <span>100% BANCO </span> 0241-874.34.64
                  </p>
                  <p>
                    <span>Nombre:</span> Gobernación del Estado Carabobo
                  </p>
                  <p>
                    <span> RIF: </span> G-20000152-6
                  </p>
                </div>
              </TabPanel>
              <TabPanel
                className="cardImportant-panel"
                value={value}
                index={1}
                dir={theme.direction}
              >
                <div className="card-content">
                  <h2>40,75 bs</h2>
                </div>
              </TabPanel>

              <TabPanel
                className="cardImportant-panel"
                value={value}
                index={2}
                dir={theme.direction}
              >
                <div className="card-content">
                  <p>
                    {" "}
                    <span>ASISTENCIA AL CONTRIBUYENTE </span> 0241-874.34.70
                  </p>
                  <p>
                    <span>RECAUDACIÓN Y CONTROL: </span> 0241-874.34.64
                  </p>
                  <p>
                    <span>FISCALIZACIÓN: </span> 0241-874.34.64
                  </p>
                </div>
              </TabPanel>
              <TabPanel
                className="cardImportant-panel"
                value={value}
                index={3}
                dir={theme.direction}
              >
                <div className="card-content">
                  <p>tributosrecaudacion@gmail.com</p>
                  <p>recaudacionycontrol18@gmail.com</p>
                  <p>asist.contribuyente2016@gmail.com</p>
                </div>
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </div>

      {/*-----------------Información Relevante-----------------*/}

      {``}
    </>
  );
}
