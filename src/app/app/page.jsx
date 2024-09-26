"use client";
import "../styles/app/inicio.scss";

import * as React from "react";
import "../styles/index.scss";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
const steps = ["Paso 1", "Paso 2", "Paso 3"];
const IMAGES_STEPS = ["img/steps/1.svg", "img/steps/2.svg", "img/steps/3.svg"];
const caption = [
  "Compra estampillas de forma: fácil, rápida y segura.",
  "Con tan solo un click",
  "Formas de Pago",
];

const captionDesq = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa ipsam delectus repellendus aperiam doloremque quidem laudantium vel rem placeat.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa ipsam delectus repellendus aperiam doloremque quidem laudantium vel rem placeat.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis culpa ipsam delectus repellendus aperiam doloremque quidem laudantium vel rem placeat.",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      className="container2"
      sx={{ width: "100%", padding: "2rem" }}
      color={"#000"}
      // bgcolor={"lightgray"}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Opcional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Ha completado todos los pasos - Ya puedes descargar/imprimir tu
            estampilla fiscal
          </Typography>
          <Container maxWidth="sm">
            <Box
              component="img"
              alt={`img/steps/4.svg`}
              src={`img/steps/4.svg`}
              maxWidth="sm"
              sx={{ height: "50vh" }}
            ></Box>
          </Container>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reiniciar Pasos</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box className="box" sx={{ flexGrow: 1 }}>
            <Grid className="grid" container spacing={5}>
              <Grid item xs={6}>
                <Box className="texto" component="">
                  <h2>{caption[activeStep]}</h2>
                  <p>{captionDesq[activeStep]}</p>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box component="">
                  <Box
                    component="img"
                    alt={`${IMAGES_STEPS[activeStep]}`}
                    src={`${IMAGES_STEPS[activeStep]}`}
                  ></Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Atras
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Saltar
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
