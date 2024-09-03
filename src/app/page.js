"use client";

import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import EmblaCarousel from "@/components/home/carousel";
// import styles from "./page.module.css";
import MenuHome from "@/components/home/header";
import Footer from "@/components/home/footer";
import { Box, Grid, Stack, Typography } from "@mui/material";
import InformativeCard from "@/components/home/informative-card";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SLIDES = [
  {
    name: "Titulo #1",
    bg: "/img/carousel/bg-1.png",
    description: "Descripción 1",
    width: "100",
  },
  {
    name: "Titulo #2",
    bg: "/img/carousel/bg-2.jpg",
    description: "Descripción 1",
  },
  {
    name: "Titulo #3",
    bg: "/img/carousel/bg-3.jpg",
    description: "Descripción 1",
  },
];

const OPTIONS = { loop: true, duration: 30 };

export default function HomePage() {
  return (
    <>
      {/* <header>
        <MenuHome></MenuHome>
      </header>
      <main> */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(8)).map((_, index) => (
            <Grid
              item
              xs={2}
              sm={3}
              md={3}
              key={index}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <InformativeCard
                title={`Información ${index}`}
                body={`Cuerpo de la sección informativa ${index}`}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          marginTop: 5,
          flexGrow: 1,
          padding: 5,
          backgroundImage: "url:('')",
          backgroundImage: "url('/background-gray.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={6} key={1}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
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
              <p>
                <i></i> 0241-874.34.70 <br />
                <i></i> tributosrecaudacion@gmail.com
              </p>
              <strong>Horario de Trabajo</strong>
              <br />
              <p>De Lunes a Viernes desde las 8am a 2pm.</p>
            </Stack>
          </Grid>
          <Grid item xs={2} sm={4} md={6} key={2}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              <Typography variant="h5" gutterBottom>
                Enlaces de Interes
              </Typography>
              <Link
                href="http://www.saime.gob.ve/"
                target="_blank"
                style={{ textDecoration: "none", color: "white!important" }}
              >
                1.- Servicio Administrativo de Identificación, Migración y
                Extranjería.
              </Link>
              <Link
                href="http://www.saren.gob.ve/"
                target="_blank"
                style={{ textDecoration: "none", color: "white!important" }}
              >
                2.- Servicio Autónomo de Registros y Notarías.
              </Link>
              <Link
                href="http://www.cgr.gob.ve/"
                target="_blank"
                style={{ textDecoration: "none", color: "white!important" }}
              >
                3.- Contraloría General de la Republica Bolivariana de
                Venezuela.
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {/* </main>
      <footer>
        <Footer></Footer>
      </footer> */}
    </>
  );
}
