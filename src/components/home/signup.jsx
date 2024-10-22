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
import CONTRIBUTORS, { TYPES_CONTRIBUTORS } from "@/common/TYPES_CONTRIBUTORS";
import IDENTIY_DOCUMENT_LETTERS, {
  LETTERS,
} from "@/common/IDENTIY_DOCUMENT_LETTERS";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUser } from "@/services/user/user-services";
import SelectParishes from "./selectParishes";
import { getParishesByMunicipality } from "@/services/parishes/get-parishes-by-municipality";
import { getMunicipalityByState } from "@/services/municipalilties/get-municipalities-by-state";
import SelectMunicipalities from "./selectMunicipalities";
// import { selectParishes } from "./selectParishes";
// import MuiPhoneNumber from "mui-phone-number";

export default function SignupPage(props) {
  const [state, setState] = React.useState(["default"]);
  const [municipalities, setMunicipalities] = React.useState([]);
  const [municipalitySelect, setMunicipalitySelect] = React.useState([]);
  const [parishes, setParishes] = React.useState([]);

  const handleStateChange = async (event) => {
    setState(event.target.value);

    if (event.target.value !== "default") {
      const getMunicipality = await getMunicipalityByState({
        state: event.target.value,
      });
      if (getMunicipality) setMunicipalities(getMunicipality);
    } else {
      setMunicipalities([]);
      setParishes([]);
    }
  };

  const handleMunicipalityChange = async (event) => {
    setMunicipalitySelect(event.target.value);

    const getParishes = await getParishesByMunicipality({
      municipality: event.target.value,
    });
    if (getParishes) setParishes(getParishes);
  };

  const typesContributors = Object.values(CONTRIBUTORS.TYPES_CONTRIBUTORS);
  const identityDocumentLetters = Object.values(
    IDENTIY_DOCUMENT_LETTERS.LETTERS
  );

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
    fullname: "",
    identity_document_letter: "",
    identity_document: "",
    phone_number: "",
    contributor_type: "",
    birthdate: "",
    constitution_date: "",
    address: "",
    parish: "",
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

    let result;
    try {
      if (
        dataContributor.email !== "" &&
        dataContributor.password !== "" &&
        dataContributor.fullname !== "" &&
        dataContributor.identity_document_letter !== "" &&
        dataContributor.identity_document !== "" &&
        dataContributor.phone_number !== "" &&
        dataContributor.contributor_type !== "" &&
        dataContributor.address !== "" &&
        dataContributor.parish !== "" &&
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
              fullWidth
              label="Nombres y Apellidos / Razón social"
              placeholder="Ingrese Nombres y Apellidos / Razón social"
              required
              onChange={(e) =>
                setDataContributor((dataContributor) => ({
                  ...dataContributor,
                  fullname: e.target.value,
                }))
              }
            />
            {/* <TextField
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
            /> */}

            <Grid container>
              <Grid item xs={3}>
                <FormControl /* color="secondary" */ fullWidth sx={{ mb: 2 }}>
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
                    {identityDocumentLetters.map((data, index) => (
                      <MenuItem key={data.id} value={data.code}>
                        {data.code}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  /* color="secondary" */
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
              /* color="secondary" */
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

            {/* opciones para VENEZOLANO */}
            {[LETTERS.VENEZOLANO.code].includes(
              dataContributor.identity_document_letter
            ) ? (
              <Typography textAlign="justify">
                <b>Venezolano </b> Pueden ser: <br />
                <b>Personal Natural: </b> Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Harum, at atque? Qui quis
                aspernatur quo. <br /> <br />
                <b>Firma Personal:</b> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Harum, at atque? Qui quis aspernatur quo.
                <br />
                <br />
              </Typography>
            ) : (
              <></>
            )}

            {/* opciones para EXTRANJERO */}
            {[LETTERS.EXTRANJERO.code].includes(
              dataContributor.identity_document_letter
            ) ? (
              <Typography textAlign="justify">
                <b>Extranjero </b> Pueden ser: <br />
                <b>Personal Natural: </b> Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Harum, at atque? Qui quis
                aspernatur quo. <br /> <br />
                <b>Firma Personal:</b> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Harum, at atque? Qui quis aspernatur quo.
                <br />
                <br />
              </Typography>
            ) : (
              <></>
            )}

            {[LETTERS.VENEZOLANO.code, LETTERS.EXTRANJERO.code].includes(
              dataContributor.identity_document_letter
            ) ? (
              <FormControl /* color="secondary" */ fullWidth sx={{ mb: 2 }}>
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

            {/* opciones para JURIDICO */}
            {[LETTERS.JURIDICO.code].includes(
              dataContributor.identity_document_letter
            ) ? (
              <Typography textAlign="justify">
                Ud ha seleccionado <b>Jurídico </b> Pueden ser: <br />
                <b>Comercial: </b> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Harum, at atque? Qui quis aspernatur quo.{" "}
                <br />
                <b>Industrial:</b> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Harum, at atque? Qui quis aspernatur quo.
                <br />
                <b>Sucesión :</b> Suele usarse para solicitudes ante el SENIAT
                para documentos sucesoriales.
                <br />
                <br />
              </Typography>
            ) : (
              <></>
            )}

            {[LETTERS.JURIDICO.code, LETTERS.CONSEJO.code].includes(
              dataContributor.identity_document_letter
            ) ? (
              <FormControl /* color="secondary" */ fullWidth sx={{ mb: 2 }}>
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
                    console.log(
                      "dataContributor.identity_document_letter" +
                        dataContributor.identity_document_letter
                    );
                    console.log("data.id: " + data.id + "   " + data.name);
                    if (
                      data.letters_contributors === "LEGAL" &&
                      !(
                        data.id === TYPES_CONTRIBUTORS.SUCESION.id &&
                        dataContributor.identity_document_letter ===
                          IDENTIY_DOCUMENT_LETTERS.LETTERS.CONSEJO.code
                      )
                    )
                      return (
                        <MenuItem
                          key={data.id}
                          value={data.id}
                          // disabled={
                          //   data.id === TYPES_CONTRIBUTORS.SUCESION.id &&
                          //   dataContributor.identity_document_letter ===
                          //     IDENTIY_DOCUMENT_LETTERS.LETTERS.CONSEJO.code
                          //     ? true
                          //     : false
                          // }
                        >
                          {data.name}
                        </MenuItem>
                      );
                  })}
                </Select>
              </FormControl>
            ) : (
              <></>
            )}

            {/* opciones para CONSEJO */}
            {[LETTERS.CONSEJO.code].includes(
              dataContributor.identity_document_letter
            ) ? (
              <Typography textAlign="justify">
                Ud ha seleccionado <b>Comunas </b> Pueden ser: <br />
                <b>Comercial: </b> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Harum, at atque? Qui quis aspernatur quo.{" "}
                <br />
                <b>Industrial:</b> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Harum, at atque? Qui quis aspernatur quo.
                <br />
                <br />
              </Typography>
            ) : (
              <></>
            )}

            {/* opciones para GUBERNAMENTAL */}
            {[LETTERS.GUBERNAMENTAL.code].includes(
              dataContributor.identity_document_letter
            ) ? (
              <Typography textAlign="justify">
                Ud ha seleccionado <b>Gubernamental. </b>
                <br />
                <br />
              </Typography>
            ) : (
              <></>
            )}

            {/* opciones para PASAPORTE */}
            {[LETTERS.PASAPORTE.code].includes(
              dataContributor.identity_document_letter
            ) ? (
              <Typography textAlign="justify">
                Ud ha seleccionado <b>Pasaporte: </b> En caso de no poseer un
                documento de identidad Venezolano, puede tramitar con el nro.
                del pasaporte.
                <br />
                <br />
              </Typography>
            ) : (
              <></>
            )}

            {!isNaturalContributor() ? (
              <TextField
                /* color="secondary" */
                type="date"
                defaultValue={getToday()}
                InputLabelProps={{ shrink: true }}
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
                InputLabelProps={{ shrink: true }}
                /* color="secondary" */
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

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="state-label">Estado</InputLabel>
              <Select
                required
                labelId="state-label"
                id="id-state"
                value={state}
                label="Estado"
                onChange={handleStateChange}
              >
                <MenuItem key={0} value={"default"}>
                  Seleccione el estado
                </MenuItem>
                <MenuItem key={7} value={7}>
                  Carabobo
                </MenuItem>
              </Select>
            </FormControl>

            <SelectMunicipalities
              municipalities={municipalities}
              setMunicipalities={setMunicipalities}
              state={state}
              setDataContributor={setDataContributor}
              dataContributor={dataContributor}
              handleMunicipalityChange={handleMunicipalityChange}
            />
            <SelectParishes
              parishes={parishes}
              municipalitySelect={municipalitySelect}
              setDataContributor={setDataContributor}
              dataContributor={dataContributor}
            />

            <Grid sx={{ mt: 5 }}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}
