import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
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
                mr: 1
              }}
              alt="The house from the offer."
              src="/img/logo.png"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Siartec | Secretaria de Hacienda y Finanzas | Gobernación de Carabobo`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  );
};

export default Footer;