"use client";

import "../styles/gacetas.scss";

import * as React from "react";

// others

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "75vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function GacetasPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/*-----------------timbres Fiscales-----------------*/}
      <div className="container2">
        {/* /*div */}
        <Box className="box" id="sect-1" sx={{ flexGrow: 1 }}>
          <Grid className="grid" container spacing={5}>
            <Grid className="gacetas texto" item xs={10}>
              <h2 className="text">Gacetas</h2>
              <p>
                <b>Pulse algún elemento para ver gaceta</b>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                dolor odit vel, odio doloremque praesentium facere id harum,
                porro blanditiis, libero neque ipsum saepe rerum quas autem
                accusamus voluptatem veniam minus sunt molestias cumque numquam
              </p>
            </Grid>

            <Grid className="gacetas" item xs={3}>
              <h2>Decreto #1</h2>
              <a href="#1" onClick={handleOpen}>
                <img src="img/bg/gacetas.jpg" alt="Prueba de gacetas" />
              </a>
            </Grid>

            <Grid className="gacetas" item xs={3}>
              <h2>Decreto #2</h2>
              <a href="#2" onClick={handleOpen}>
                <img src="img/bg/gacetas.jpg" alt="Prueba de gacetas" />
              </a>
            </Grid>

            <Grid className="gacetas" item xs={3}>
              <h2>Decreto #3</h2>
              <a href="#3" onClick={handleOpen}>
                <img src="img/bg/gacetas.jpg" alt="Prueba de gacetas" />
              </a>
            </Grid>

            <Grid className="gacetas" item xs={3}>
              <h2>Decreto #4</h2>
              <a href="#4" onClick={handleOpen}>
                <img src="img/bg/gacetas.jpg" alt="Prueba de gacetas" />
              </a>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <embed
              type="application/pdf"
              height="100%"
              width="100%"
              src="pdfs/gaceta1.pdf"
            />
          </Box>
        </Modal>
      </div>

      {``}
    </>
  );
}
