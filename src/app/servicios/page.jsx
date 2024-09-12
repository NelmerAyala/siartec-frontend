"use client";

import "../styles/servicios.scss";

import * as React from "react";

// others

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


// tabs



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
            <Grid item xs={10} className="texto">
              <h2 className="text">Timbres Fiscales</h2>
              <p>
                Un timbre fiscal es una etiqueta adhesiva que se utiliza para recaudar impuestos o tasas sobre diversos documentos, bienes o servicios. Es decir, al adquirir un timbre fiscal y colocarlo en el documento correspondiente, se está pagando un impuesto al Estado.
              </p>
            </Grid>

            <Grid item xs={4}>
              <div className="flip">
                <div className="front" id="back-1">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>¿Para que sirve?</h3>
                  <p>
                    Su principal función es recaudar ingresos para el Estado, los cuales se destinan a financiar diversos servicios públicos.
                  </p>
                  <p>
                  Sirven como un mecanismo de control para verificar la autenticidad de documentos y garantizar que se han pagado los impuestos correspondientes.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="flip">
                <div className="front" id="back-2">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>¿Dónde se usan?</h3>
                  <p>
                    Documentación legal: Contratos, escrituras, poderes, etc. <br/>
                    Licencias y permisos: Licencias de conducir, permisos de armas, etc. <br/>
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="flip" >
                <div className="front" id="back-3">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>¿Qué es una UCD?</h3>
                  <p>
                    <b>Unidad de Cuenta Dinámica</b> Está basada en la moneda de mayor denominación publicada en el Bando de Venezuela.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="buttons">
                <button className="btn-1">Comprar Estampillas</button>
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
              El impuesto 1x1000 es un tipo de tributo que se aplica sobre ciertos actos o contratos, generalmente relacionados con bienes inmuebles. Su nombre se debe a que, tradicionalmente, se calculaba aplicando un porcentaje del 1% sobre el valor de la transacción.
              </p>
            </Grid>

            <Grid item xs={3}>
              <div className="flip" >
                <div className="front" id="back-4">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>Base Imponible:</h3>
                  <p>
                    El impuesto se calcula sobre el valor de un bien inmueble, como un terreno, una casa o un apartamento, cuando se realiza una operación como una compraventa, un alquiler o una donación.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className="flip" >
                <div className="front" id="back-5">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3> Alícuota: </h3>
                  <p>
                    La alícuota es el porcentaje que se aplica sobre la base imponible para determinar el monto del impuesto. Si bien tradicionalmente era del 1%, esta tasa puede variar según la legislación de cada jurisdicción.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="flip" >
                <div className="front" id="back-6">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>Destinatario: </h3>
                  <p>
                    Los ingresos obtenidos por este impuesto suelen destinarse a financiar servicios públicos locales, como obras de infraestructura, mantenimiento de espacios públicos o programas sociales.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="buttons">
                <button className="btn-1 btn-oscuro">Declarar 1x1000</button>
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
                El impuesto sobre la renta minera es un tributo que grava las ganancias obtenidas por las empresas y personas naturales dedicadas a la actividad minera. Este impuesto se establece con el objetivo de que el sector minero contribuya de manera justa al financiamiento de los gastos públicos y al desarrollo económico del país.
              </p>
            </Grid>

            <Grid item xs={4}>
              <div className="flip" >
                <div className="front" id="back-8">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>Explotación de recursos naturales:</h3>
                  <p>
                    La actividad minera implica la explotación de un recurso natural no renovable, por lo que se considera justo que el sector contribuya al financiamiento de los servicios públicos que benefician a toda la sociedad.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="flip" >
                <div className="front" id="back-9">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>Impacto ambiental: </h3>
                  <p>
                    La minería puede generar impactos ambientales significativos, por lo que el impuesto sobre la renta minera puede servir como un instrumento para internalizar estos costos externos y fomentar prácticas mineras más sostenibles.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="flip" >
                <div className="front" id="back-10">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>Generación de ingresos para el Estado: </h3>
                  <p>
                    Los ingresos obtenidos por este impuesto permiten al Estado financiar programas sociales, infraestructura y otros proyectos de inversión.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="buttons">
                <button className="btn-1">Pagar Renta</button>
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
                 Es un tipo de tributo que se aplica a ciertos documentos que autorizan el transporte de mercancías o bienes. Su objetivo principal es controlar el flujo de bienes, recaudar ingresos para el Estado y, en algunos casos, proteger ciertos sectores productivos.
              </p>
            </Grid>

            <Grid item xs={5}>
              <div className="flip" >
                <div className="front" id="back-6">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>Control de Comercio</h3>
                  <p>
                  Permite a las autoridades fiscales tener un registro de las operaciones comerciales y controlar el contrabando y la evasión fiscal.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={5}>
              <div className="flip" >
                <div className="front" id="back-7">
                  <h2 className="text-shadow">Click</h2>
                </div>
                <div className="back">
                  <h3>Guías de transporte de mercancías: </h3>
                  <p>
                    Utilizadas para el transporte de bienes en general, desde productos agrícolas hasta maquinaria industrial.
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={12}>
              <div className="buttons">
                <button className="btn-1  btn-oscuro">Comprar Guias</button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

      {``}
    </>
  );
}
