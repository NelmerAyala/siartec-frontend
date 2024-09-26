"use client";
import * as React from "react";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { ChangePasswordUser } from "@/services/user/update-password-services";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function ChangePassword() {
  const { data: session, status } = useSession();
  const [dataPassword, setDataPassword] = React.useState({
    passwordCurrent: "",
    passwordNew: "",
    passwordNewConfirm: "",
  });
  const [messageError, setMessageError] = React.useState("");
  const [messageSuccess, setMessageSuccess] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [passwordNewError, setPasswordNewError] = React.useState("");
  const [passwordNewConfirmError, setPasswordNewConfirmError] = React.useState(
    ""
  );

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [showPasswordNew, setShowPasswordNew] = React.useState(false);
  const handleClickShowPasswordNew = () => setShowPasswordNew(!showPasswordNew);
  const handleMouseDownPasswordNew = () => setShowPasswordNew(!showPasswordNew);

  const [showPasswordNewConfirm, setShowPasswordNewConfirm] = React.useState(
    false
  );
  const handleClickShowPasswordNewConfirm = () =>
    setShowPasswordNewConfirm(!showPasswordNewConfirm);
  const handleMouseDownPasswordNewConfirm = () =>
    setShowPasswordNewConfirm(!showPasswordNewConfirm);

  const handlePassword = async (e) => {
    setDataPassword({
      ...dataPassword,
      passwordCurrent: e.target.value,
    });
    if (e.target.validity.valid) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };
  const handlePasswordNew = async (e) => {
    setDataPassword({
      ...dataPassword,
      passwordNew: e.target.value,
    });
    if (e.target.validity.valid) {
      setPasswordNewError(false);
    } else {
      setPasswordNewError(true);
    }
  };
  const handlePasswordNewConfirm = async (e) => {
    setDataPassword({
      ...dataPassword,
      passwordNewConfirm: e.target.value,
    });
    if (e.target.validity.valid) {
      setPasswordNewConfirmError(false);
    } else {
      setPasswordNewConfirmError(true);
    }
  };
  const sendRequest = async () => {
    let changePassword = await ChangePasswordUser(dataPassword, session);
    if (changePassword.hasOwnProperty("msg")) {
      setMessageError("");
      setMessageSuccess(changePassword.msg);
    } else {
      setMessageSuccess("");
      setMessageError(changePassword.data.msg);
    }
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (
      dataPassword.passwordCurrent.trim() === "" ||
      dataPassword.passwordNew.trim() === "" ||
      dataPassword.passwordNewConfirm.trim() === ""
    ) {
      setMessageError("Los campos no pueden estar vacíos");
    } else if (dataPassword.passwordNew !== dataPassword.passwordNewConfirm) {
      setMessageError("La nueva contraseña no coincide con su confirmación");
    } else {
      setMessageError("");
      sendRequest();
    }
  };

  return (
    <>
      {messageError !== "" ? (
        <>
          <Alert severity="error" hidden={false}>
            {messageError}
          </Alert>
          <br />
          <br />
        </>
      ) : (
        <></>
      )}
      {messageSuccess !== "" ? (
        <>
          <Alert severity="success" hidden={false}>
            {messageSuccess}
          </Alert>
          <br />
          <br />
        </>
      ) : (
        <></>
      )}

      <Box
        component="form"
        alignItems={"center"}
        noValidate={false}
        autoComplete="off"
        sx={{
          padding: 5,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="passwordCurrent"
              label="Contraseña Actual"
              // type="password"
              autoComplete="passwordCurrent"
              fullWidth
              required
              onChange={handlePassword}
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
              error={passwordError}
              helperText={
                passwordError ? (
                  <Typography component={"span"} variant={"body2"}>
                    Por favor ingrese una contraseña segura, la misma debe
                    contener entre 8 y 20, incluyendo: <br />- Al menos 1
                    minúscula
                    <br />- Al menos 1 mayúscula <br />- Al menos 1 simbolo
                    (@$!%*?&)
                  </Typography>
                ) : (
                  ""
                )
              }
              inputProps={{
                pattern:
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[0-9A-Za-zd@$!%*?&]{8,20}$",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="passwordNew"
              label="Nueva Contraseña"
              type={showPasswordNew ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordNew}
                      onMouseDown={handleMouseDownPasswordNew}
                    >
                      {showPasswordNew ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              autoComplete="passwordNew"
              fullWidth
              required
              onChange={handlePasswordNew}
              error={passwordNewError}
              helperText={
                passwordNewError ? (
                  <Typography component={"span"} variant={"body2"}>
                    Por favor ingrese una contraseña segura, la misma debe
                    contener entre 8 y 20, incluyendo: <br />- Al menos 1
                    minúscula
                    <br />- Al menos 1 mayúscula <br />- Al menos 1 simbolo
                    (@$!%*?&)
                  </Typography>
                ) : (
                  ""
                )
              }
              inputProps={{
                pattern:
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[0-9A-Za-zd@$!%*?&]{8,20}$",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="passwordNewConfirm"
              label="Confirme nueva Contraseña"
              type={showPasswordNewConfirm ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPasswordNewConfirm}
                      onMouseDown={handleMouseDownPasswordNewConfirm}
                    >
                      {showPasswordNewConfirm ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              autoComplete="passwordNewConfirm"
              fullWidth
              required
              onChange={handlePasswordNewConfirm}
              error={passwordNewConfirmError}
              helperText={
                passwordNewConfirmError ? (
                  <Typography component={"span"} variant={"body2"}>
                    Por favor ingrese una contraseña segura, la misma debe
                    contener entre 8 y 20, incluyendo: <br />- Al menos 1
                    minúscula
                    <br />- Al menos 1 mayúscula <br />- Al menos 1 simbolo
                    (@$!%*?&)
                  </Typography>
                ) : (
                  ""
                )
              }
              inputProps={{
                pattern:
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[0-9A-Za-zd@$!%*?&]{8,20}$",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            // display={"flex"}
            // justifyContent={"center"}
            // alignItems={"center"}
          >
            <Button type="submit" variant="contained" onClick={handleOnSubmit}>
              Guardar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
