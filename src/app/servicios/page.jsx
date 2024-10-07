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
                Un timbre fiscal se utiliza para recaudar impuestos o tasas sobre diversos documentos, bienes o servicios, es decir, al adquirir un timbre fiscal y colocarlo en el documento correspondiente, se está otorgando validez al mismo.
              </p>
            </Grid>

            <Grid item xs={4}>
              <div className="flip">
                <div className="front" id="back-1">
                  <h2 className="text-shadow"></h2>
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
                  <h2 className="text-shadow"></h2>
                </div>
                <div className="back">
                  <h3>¿Dónde se usan?</h3>
                  <p>
                    Se usan en Actos y documentos expedidos por una autoridad Nacional o Estadal : <br/>
                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="flip" >
                <div className="front" id="back-3">
                  <h2 className="text-shadow"></h2>
                </div>
                <div className="back">
                  <h3>¿Qué es una UCD?</h3>
                  <p>
                    <b>Unidad de Cuenta Dinámica</b> Está basada en la moneda de mayor denominación publicada por el Banco Central de Venezuela.
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
              <h2 className="text">1 x 1000</h2>
              <p>
              Es el impuesto estadal por la emisión de órdenes de pago, cheques, transferencias y cualquier otro medio de pago efectuado por parte de entes u órganos del sector público nacional, estadal y municipal<br/> <br/> Otorgamiento de instrumentos crediticios a favor de personas naturales o jurídicas por parte de los bancos y demás instituciones financieras ubicados en la jurisdicción del estado Carabobo
               que sean realizadas en calidad de anticipos, pagos parciales o pagos totales a favor de contratistas derivados del contrato de ejecución de obras, prestación de servicio o de adquisición de bienes y servicios, no podrá exceder de un bolívar por cada mil bolívares (1x1000)              </p>
            </Grid>

            <Grid item xs={3}>
              <div className="flip" >
                <div className="front" id="back-4">
                  <h2 className="text-shadow"></h2>
                </div>
                <div className="back">
                  <h3>Base Imponible:</h3>
                  <p>
                  Se calcula según sea el caso, será el que resulte de multiplicar el monto neto de los instrumentos crediticios o instrumentos de pago, por (0,001), correspondiente a la alícuota impositiva de cualquier monto.                  </p>
                </div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <div className="flip" >
                <div className="front" id="back-5">
                  <h2 className="text-shadow"></h2>
                </div>
                <div className="back">
                  <h3> Alícuota: </h3>
                  <p>
                  El cálculo del impuesto a pagar o retener, según sea el caso, se tomará del monto bruto de los instrumentos crediticios o instrumentos de pago.
                    <br/> <br/>Cálculo del impuesto uno por mil (1x1000) = monto neto x 0,001
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="flip" >
                <div className="front" id="back-6">
                  <h2 className="text-shadow"></h2>
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
                El impuesto sobre la renta minera es un tributo que grava el aprovechamiento de minerales no metálicos por las empresas y personas naturales dedicadas a la actividad minera. Este impuesto se establece con el objetivo de que el sector minero contribuya de manera justa al financiamiento de los gastos públicos y al desarrollo económico del país.
              </p>
            </Grid>

            <Grid item xs={4}>
              <div className="flip" >
                <div className="front" id="back-8">
                  <h2 className="text-shadow"></h2>
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
                  <h2 className="text-shadow"></h2>
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
                  <h2 className="text-shadow"></h2>
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
              Tiene como finalidad de controlar el transporte y circulación de los minerales no metálicos en la jurisdicción del Estado Carabobo
              </p>
            </Grid>

            <Grid item xs={5}>
              <div className="flip" >
                <div className="front" id="back-6">
                  <h2 className="text-shadow"></h2>
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
                  <h2 className="text-shadow"></h2>
                </div>
                <div className="back">
                  <h3>Guías de circulación: </h3>
                  <p>
                    Utilizadas para el transporte y circulación de minerales no metálicos.
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
