import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoginWithGoogle } from "./auth-google";
import { auth } from "@/services/auth/signin";
import { useSession, signIn, signOut } from "next-auth/react"
import { GoogleLogin } from "@react-oauth/google";

const Signin = React.forwardRef((props, ref) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    // await auth({ email, password });
    await signIn('Credentials',{
      email: email,
      password: password,
      redirect: true,
       callbackUrl: callbackUrl ?? 'http://localhost:3000/403'

    })
  }


  const paperStyle = {
    padding: 20,
    // height: "73vh",
    // width: 300,
    margin: "0.5rem",
  };
  const avatarStyle = { backgroundColor: 'rgb(254 151 76)' }
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Avatar sx={avatarStyle} >
          <LockOutlinedIcon />
        </Avatar>
        <Grid container justifyContent="center" sx={{ my: 2 }}>
          <h2>Inicia Sesión</h2>
        </Grid>
        <Grid container justifyContent="center">
          <Divider sx={{ width: '100%' }}><h3>con</h3></Divider>
        </Grid>
        <Grid
          sx={{ my: 2 }}
          container
          justifyContent="center"

        >
                  {/* <button onClick={() => signIn('google')}>Sign in with google</button> */}

          <LoginWithGoogle />
        </Grid>
        <Grid sx={{ my: 4 }} container justifyContent="center">
          <Divider style={{ borderColor: 'rgb(254 151 76)', width: '100%' }} ><h3>o inicia con</h3></Divider>
        </Grid>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mb: 2 },
          }}
          noValidate
          autoComplete="off"
        >
          <form onSubmit={onSubmit} >
          <TextField
            color='secondary'
            label="Correo electrónico"
            placeholder="Ingrese correo electrónico"
            type="email"
            fullWidth
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            color='secondary'
            label="Contraseña"
            placeholder="Ingrese contraseña"
            type="password"
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            // onClick={() => handleSubmit()}
          >
            Ingresar
          </Button>
          </form>
          <Typography>
            <Link color={'secondary'} href="#">¿Olvidó su contraseña ?</Link>
          </Typography>
          <Grid sx={{ mt: 5 }}>
            <Typography textAlign={'right'}>
              No tiene una cuenta?{" "}
              <Link color={'secondary'} href="#" onClick={() => props.handleChange("event", 1)}>
                Registrarse
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Paper >
    </Grid >
  );
});

export default Signin;
