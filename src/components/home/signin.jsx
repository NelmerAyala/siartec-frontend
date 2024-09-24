import React, { useEffect, useState } from "react";
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
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoginWithGoogle } from "./auth-google";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SigninPage(props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleLogin = async (googleData) => {
    let result;
    try {
      result = await signIn("googleonetap", {
        credential: googleData.credential,
        redirect: false,
      });

      if (result.error !== null) {
        let arrayErrores = JSON.parse(result.error);

        let message;
        for (let i = 0; i < arrayErrores["errors"].length; i++) {
          message = arrayErrores.errors[i].message + "\n";
        }

        setMessageError(message);
        setEmptyFields(true);
      } else {
        router.push("/app");
      }
    } catch (error) {
      console.log(error);
      setEmptyFields(true);
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let result;
    try {
      if (password !== "" && email !== "") {
        result = await signIn("credentials", {
          email: email,
          password: password,
          redirect: false,
          // callbackUrl: "http://localhost:3000/app",
        });

        if (result.error !== null) {
          let arrayErrores = JSON.parse(result.error);

          let message;
          for (let i = 0; i < arrayErrores["errors"].length; i++) {
            message = arrayErrores.errors[i].message + "\n";
          }

          setMessageError(message);
          setEmptyFields(true);
        } else {
          router.push("/app");
        }
      } else {
        setMessageError("Debe ingresar correo electrónico y contraseña");
        setEmptyFields(true);
      }
    } catch (error) {
      console.log(error);
      setEmptyFields(true);
    }
  };

  useEffect(() => {
    if (password !== "" || email !== "") {
      setEmptyFields(false);
    }
  }, [email, password]);

  const [emptyFields, setEmptyFields] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const paperStyle = {
    padding: 20,
    backgroundColor: "white",
    // height: "73vh",
    // width: 300,
    margin: "0.5rem",
  };
  const avatarStyle = { backgroundColor: "rgb(254 151 76)" };
  const btnstyle = { margin: "8px 0" };
  return (
    <>
      {emptyFields ? (
        <Alert style={{ zIndex: "999999" }} severity="error" hidden={false}>
          {messageError}
        </Alert>
      ) : (
        <></>
      )}
      {props.messageCreate !== "" ? (
        <Alert style={{ zIndex: "999999" }} severity="success" hidden={false}>
          {props.messageCreate}
        </Alert>
      ) : (
        <></>
      )}
      <Grid>
        <Paper style={paperStyle}>
          <Avatar sx={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Grid container justifyContent="center" sx={{ my: 2 }}>
            <h2>Inicia Sesión</h2>
          </Grid>
          <Grid container justifyContent="center">
            <Divider sx={{ width: "100%" }}>
              <h3>con</h3>
            </Divider>
          </Grid>
          <Grid sx={{ my: 2 }} container justifyContent="center">
            {/* <Button startIcon={<Google />} variant="contained" color="secondary" onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/' })}>Sign in with google</Button> */}

            <LoginWithGoogle handleLogin={handleLogin} />
          </Grid>
          <Grid sx={{ my: 4 }} container justifyContent="center">
            <Divider style={{ borderColor: "rgb(254 151 76)", width: "100%" }}>
              <h3>o inicia con</h3>
            </Divider>
          </Grid>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mb: 2 },
            }}
            noValidate={false}
            onSubmit={handleOnSubmit}
          >
            <TextField
              // color="secondary"
              label="Correo electrónico"
              placeholder="Ingrese correo electrónico"
              type="email"
              name="email"
              fullWidth
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              // color="secondary"
              label="Contraseña"
              name="password"
              placeholder="Ingrese contraseña"
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              // color="secondary"
              variant="contained"
              fullWidth
              // onClick={() => handleSubmit()}
            >
              Ingresar
            </Button>
            <Typography>
              <Button
                onClick={() => props.setOpenChildren(true)}
                // color={"secondary"}
              >
                ¿Olvidó su contraseña ?
              </Button>
              {/* <Link color={"secondary"} href="#">
                ¿Olvidó su contraseña ?
              </Link> */}
            </Typography>
            <Grid sx={{ mt: 5 }}>
              <Typography textAlign={"right"}>
                No tiene una cuenta?{" "}
                <Link
                  // color={"secondary"}
                  href="#"
                  onClick={() => props.handleChangeTab("event", 1)}
                >
                  Registrarse
                </Link>
              </Typography>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}
