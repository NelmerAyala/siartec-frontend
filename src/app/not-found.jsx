import Footer from "@/components/home/footer";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const VERSION = process.env.REACT_APP_VERSION;

export default function NotFound() {
  return (
    <>
      <Box display="flex" alignItems="center" sx={{ justifyContent: "center" }}>
        <Card sx={{ maxWidth: "50%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              // width="1000"
              image="/img/404.webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Página no encontrada
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {""}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link
              type="button"
              // color="secondary"
              variant="contained"
              // fullWidth
              size="small"
              href="/app"
            >
              <Button variant="contained">Ir al Inicio</Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
