import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          flexGrow: 1,
          padding: 5,
          backgroundImage: "url:('')",
          // backgroundImage: "url('/img/background-gray.png')",
          backgroundRepeat: "repeat",
        }}
        className="foot"
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="foot-section"
        >
          <Grid item xs={2} sm={4} md={6} key={1}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Typography variant="h4" gutterBottom className="title">
                SIARTEC
              </Typography>
              <address>
                <strong>
                  Secretaria de Hacienda y Finanzas del Estado Carabobo.
                </strong>
                <br />
                Urb. Ind. La Quizanda Valencia.
              </address>

              <p>Horario de Trabajo</p>
              <Typography>De Lunes a Viernes desde las 8am a 2pm.</Typography>
            </Stack>
          </Grid>
          <Grid item xs={2} sm={4} md={6} key={2}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Typography variant="h5" gutterBottom>
                Enlaces de Interes
              </Typography>
              <Link
                href="http://www.saime.gob.ve/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
                className="foot-btn"
              >
                1.- Servicio Administrativo de Identificación, Migración y
                Extranjería.
              </Link>
              <Link
                href="http://www.saren.gob.ve/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
                className="foot-btn"
              >
                2.- Servicio Autónomo de Registros y Notarías.
              </Link>
              <Link
                href="http://www.cgr.gob.ve/"
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
                className="foot-btn"
              >
                3.- Contraloría General de la Republica Bolivariana de
                Venezuela.
              </Link>
              <Typography>
                Información de contacto
                <i></i> 0241-874.34.70 <br />
                <i></i> tributosrecaudacion@gmail.com
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          // backgroundColor: "colorPrimary",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Container>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <Box
                component="img"
                sx={{
                  // height: 60,
                  width: 120,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  // display: { xs: 'none', md: 'flex' },
                  mr: 1,
                }}
                alt="The house from the offer."
                src="/img/logo.png"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" variant="subtitle1">
                {`${new Date().getFullYear()} | © Gobernación Bolivariana de Carabobo | Secretaría de Hacienda y Finanzas | © 2018-2019`}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
