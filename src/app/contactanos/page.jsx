"use client";

import "../styles/contactanos.scss";

import * as React from "react";

// others
import PropTypes from 'prop-types';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


//input
import TextField from '@mui/material/TextField';


//button
import Button from '@mui/material/Button';
 
// Card
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';















export default function ServicesPage() {

    return (
    <>
      {/*-----------------timbres Fiscales-----------------*/}
      <div className="container2" id="oscuro">
        {/* /*div */}
        <Box className="box" id="sect-1" sx={{ flexGrow: 1 }}>
            <Grid className="grid"  container spacing={5}>
                <Grid item xs={10}  className="texto">
                    <h2 className="text">Formulario de Contacto</h2>
                </Grid>

                <Grid className="contact-content__input" item item xs={4} >
                   <TextField className="contact-input" id="standard-basic" label="Nombre" variant="standard" />
                </Grid>
                
                <Grid className="contact-content__input" item item xs={4} >
                  <TextField className="contact-input" id="standard-basic" label="Email" variant="standard" />
                </Grid>

                <Grid className="contact-content__input" item item xs={8} >
                  <TextField className="contact-input" id="standard-basic" label="Mensaje" variant="standard" />
                </Grid>

                <Grid item item xs={12} >
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
 