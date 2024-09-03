import React from "react";
import moment from "moment";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  InputLabel,
  Divider,
  Link,
  Input,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { MuiTelInput } from "mui-tel-input";
import Checkbox from "@mui/material/Checkbox";
import CONTRIBUTORS from "@/common/TYPES_CONTRIBUTORS";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUser } from "@/services/user/user-services";
// import MuiPhoneNumber from "mui-phone-number";

export default function SignupPage(props) {
  const identityDocumentLletters = [
    { id: 1, description: "V" },
    { id: 2, description: "E" },
    { id: 3, description: "J" },
    { id: 4, description: "G" },
  ];
  const typesContributors = Object.values(CONTRIBUTORS.TYPES_CONTRIBUTORS);

  const paperStyle = {
    padding: 20,
    // width: 300,
    margin: "0.5rem",
  };

  const avatarStyle = { backgroundColor: "rgb(254 151 76)" };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [messageError, setMessageError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const [dataContributor, setDataContributor] = React.useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    identity_document_letter: "",
    identity_document: "",
    phone_number: "",
    contributor_type: "",
    // personal_signature: false,
    birthdate: "",
    constitution_date: "",
    address: "",
  });

  const changeTypeContributor = (event) => {
    setDataContributor((dataContributor) => ({
      ...dataContributor,
      contributor_type: event.target.value,
    }));
  };

  const changeLetter = (event) => {
    setDataContributor((dataContributor) => ({
      ...dataContributor,
      identity_document_letter: event.target.value,
      contributor_type: "",
    }));
    console.log(
      "contributor_type: " + JSON.stringify(dataContributor.contributor_type)
    );
  };

  const isNaturalContributor = () => {
    return dataContributor.contributor_type ===
      CONTRIBUTORS.getTypeContributorByName("NATURAL").id
      ? true
      : false;
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log("dataContributor: " + JSON.stringify(dataContributor));
    let result;
    try {
      if (
        dataContributor.email !== "" &&
        dataContributor.password !== "" &&
        dataContributor.firstname !== "" &&
        dataContributor.lastname !== "" &&
        dataContributor.identity_document_letter !== "" &&
        dataContributor.identity_document !== "" &&
        dataContributor.phone_number !== "" &&
        dataContributor.contributor_type !== "" &&
        dataContributor.address !== "" &&
        (dataContributor.birthdate !== "" ||
          dataContributor.constitution_date !== "")
      ) {
        dataContributor.birthdate !== ""
          ? delete dataContributor.constitution_date
          : delete dataContributor.birthdate;

        result = await createUser(dataContributor);

        if (result.data && result.statusCode !== 200) {
          let message = result.data.message;

          setMessageError(message);
        } else {
          setMessageError("");
          props.setMessageCreate("Registro exitoso, ya puede iniciar sesión");
          props.handleChangeTab("event", 0);
        }
      } else {
        setMessageError("Debe ingresar todos los campos requeridos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getToday = () => {
    let today = moment().format("YYYY-MM-DD");
    return today;
  };
  const handlePassword = async (e) => {
    setDataContributor((dataContributor) => ({
      ...dataContributor,
      password: e.target.value,
    }));
    if (e.target.validity.valid) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };
  return (
    <>
      {messageError !== "" ? (
        <Alert style={{ zIndex: "999999" }} severity="error" hidden={false}>
          {messageError}
        </Alert>
      ) : (
        <></>
      )}
      <Grid>
        <Paper style={paperStyle}>
          <Grid>
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <Grid container justifyContent="center" sx={{ my: 2 }}>
              <h2>Crear cuenta</h2>
            </Grid>
            <Typography gutterBottom>
              Por favor llene este formulario para crear su cuenta!
            </Typography>
          </Grid>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mb: 2 },
            }}
            noValidate={false}
            autoComplete="off"
            onSubmit={handleOnSubmit}
          >
            <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
              Datos Usuario
            </Divider>
            <TextField
              color="secondary"
              fullWidth
              label="Correo Electrónico"
              placeholder="Ingrese correo electrónico"
              required
              onChange={(e) =>
                setDataContributor((dataContributor) => ({
                  ...dataContributor,
                  email: e.target.value,
                }))
              }
            />
            <TextField
              // defaultValue={"Nel24297146@"}
              color="secondary"
              label="Contraseña"
              name="password"
              placeholder="Ingrese contraseña"
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
            <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
              Datos Personales
            </Divider>
            <TextField
              color="secondary"
              fullWidth
              label="Nombres"
              placeholder="Ingrese nombres"
              required
              onChange={(e) =>
                setDataContributor((dataContributor) => ({
                  ...dataContributor,
                  firstname: e.target.value,
                }))
              }
            />
            <TextField
              color="secondary"
              fullWidth
              label="Apellidos"
              placeholder="Ingrese apellidos"
              required
              onChange={(e) =>
                setDataContributor((dataContributor) => ({
                  ...dataContributor,
                  lastname: e.target.value,
                }))
              }
            />

            <Grid container>
              <Grid item xs={3}>
                <FormControl color="secondary" fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="identity-document-letter-label">
                    Letra
                  </InputLabel>
                  <Select
                    required
                    labelId="identity-document-letter-label"
                    id="id-letter"
                    // value={dataContributor.identity_document_letter}
                    label="Letra"
                    onChange={changeLetter}
                    // defaultValue={"V"}
                  >
                    {identityDocumentLletters.map((data, index) => (
                      <MenuItem key={data.id} value={data.description}>
                        {data.description}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  color="secondary"
                  fullWidth
                  type="text"
                  required
                  label="Documento de Identifiación"
                  placeholder="Ingrese C.I. o RIF"
                  onChange={(e) =>
                    setDataContributor((dataContributor) => ({
                      ...dataContributor,
                      identity_document: e.target.value,
                    }))
                  }
                />
              </Grid>
            </Grid>
            <MuiTelInput
              color="secondary"
              fullWidth
              label="Número de Teléfono"
              required
              placeholder="Ingrese número de teléfono"
              value={dataContributor.phone_number}
              onlyCountries={["VE"]}
              defaultCountry="VE"
              onChange={(e) =>
                setDataContributor((dataContributor) => ({
                  ...dataContributor,
                  phone_number: e,
                }))
              }
            />

            <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
              Datos Contribuyente
            </Divider>
            {["V", "E"].includes(dataContributor.identity_document_letter) ? (
              <FormControl color="secondary" fullWidth sx={{ mb: 2 }}>
                <InputLabel id="type-contributor-natural-label">
                  Tipo de contribuyente Natural
                </InputLabel>
                <Select
                  labelId="type-contributor-natural-label"
                  id="type-contributor-natural"
                  value={dataContributor.contributor_type}
                  label="Tipo de contribuyente natural"
                  onChange={changeTypeContributor}
                  // defaultValue={1}
                >
                  {typesContributors.map((data, index) => {
                    if (data.letters_contributors === "NATURAL")
                      return (
                        <MenuItem key={data.id} value={data.id}>
                          {data.name}
                        </MenuItem>
                      );
                  })}
                </Select>
              </FormControl>
            ) : (
              <></>
            )}

            {["J", "G"].includes(dataContributor.identity_document_letter) ? (
              <FormControl color="secondary" fullWidth sx={{ mb: 2 }}>
                <InputLabel id="type-contributor-legal-label">
                  Tipo de contribuyente Jurídico
                </InputLabel>
                <Select
                  labelId="type-contributor-legal-label"
                  id="type-contributor-legal"
                  value={dataContributor.contributor_type}
                  label="Tipo de contribuyente Jurídico"
                  onChange={changeTypeContributor}
                >
                  {typesContributors.map((data, index) => {
                    if (data.letters_contributors === "LEGAL")
                      return (
                        <MenuItem key={data.id} value={data.id}>
                          {data.name}
                        </MenuItem>
                      );
                  })}
                </Select>
              </FormControl>
            ) : (
              <></>
            )}

            {/* {isNaturalContributor() ? (
              <FormControlLabel
                control={
                  <Checkbox
                    name="checked-allrules"
                    color="secondary"
                    onClick={(e) => handleChangeCheck(e)}
                  />
                }
                label="Es firma personal."
                sx={{ mb: 2, mt: 0 }}
              />
            ) : (
              <></>
            )} */}

            {!isNaturalContributor() ? (
              <TextField
                color="secondary"
                type="date"
                defaultValue={getToday()}
                fullWidth
                label="Fecha de constitución"
                required
                onChange={(e) =>
                  setDataContributor((dataContributor) => ({
                    ...dataContributor,
                    ...{ constitution_date: e.target.value },
                  }))
                }
              />
            ) : dataContributor.personal_signature === true ? (
              <TextField
                color="secondary"
                type="date"
                defaultValue={getToday()}
                fullWidth
                label="Fecha de constitución"
                required
                onChange={(e) =>
                  setDataContributor((dataContributor) => ({
                    ...dataContributor,
                    ...{ constitution_date: e.target.value },
                  }))
                }
              />
            ) : (
              <TextField
                color="secondary"
                type="date"
                defaultValue={getToday()}
                fullWidth
                label="Fecha de nacimiento"
                required
                onChange={(e) =>
                  setDataContributor((dataContributor) => ({
                    ...dataContributor,
                    ...{ birthdate: e.target.value },
                  }))
                }
              />
            )}

            <TextField
              color="secondary"
              fullWidth
              label="Dirección"
              placeholder="Ingrese dirección"
              onChange={(e) =>
                setDataContributor((dataContributor) => ({
                  ...dataContributor,
                  address: e.target.value,
                }))
              }
            />
            {/* <FormControl component="fieldset" style={marginTop}>
              <FormLabel component="legend">Firma personal</FormLabel>
              <RadioGroup aria-label="firma" name="firma" style={{ display: 'initial' }}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl> */}

            {/* <TextField fullWidth label='Password' placeholder="Enter your password" />
            <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" /> */}

            <Grid sx={{ mt: 5 }}>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                fullWidth
                // onClick={(e) => handleOnSubmit(e)}
              >
                Crear cuenta
              </Button>
            </Grid>

            {/* </form> */}
          </Box>
        </Paper>
      </Grid>
    </>
  );
}
