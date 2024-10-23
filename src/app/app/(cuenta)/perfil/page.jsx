"use client";
import * as React from "react";
import "../../../styles/app/generar/generar.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Alert,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import moment from "moment";
import { getSession, useSession } from "next-auth/react";
import { getProfiledUser } from "@/services/user/get-profile-services";
import CONTRIBUTORS, { TYPES_CONTRIBUTORS } from "@/common/TYPES_CONTRIBUTORS";
import IDENTIY_DOCUMENT_LETTERS, {
  LETTERS,
} from "@/common/IDENTIY_DOCUMENT_LETTERS";
import { MuiTelInput } from "mui-tel-input";
import SelectParishes from "@/components/app/cuenta/profile/selectParishes";
import SelectMunicipalities from "@/components/app/cuenta/profile/selectMunicipalities";
import SelectStates from "@/components/app/cuenta/profile/selectStates";
import { getMunicipalityByState } from "@/services/municipalilties/get-municipalities-by-state";
import { getStatesAll } from "@/services/states/get-states";
import { getParishesByMunicipality } from "@/services/parishes/get-parishes-by-municipality";
import { UpdateUser } from "@/services/user/update-user-services";

export default function PayTaxStamps() {
  const { data: session, status } = useSession();
  const getToday = () => {
    let today = moment(
      dataContributor.birthdate || dataContributor.constitution_date
    ).format("yyyy-MM-DD");
    return today;
  };
  const [stateSelect, setStateSelect] = React.useState("default");
  const [states, setStates] = React.useState([]);
  const [state, setState] = React.useState(["default"]);
  const [municipalities, setMunicipalities] = React.useState([]);
  const [municipalitySelect, setMunicipalitySelect] = React.useState("default");
  const [parishes, setParishes] = React.useState([]);
  const [messageError, setMessageError] = React.useState("");
  const [messageSuccess, setMessageSuccess] = React.useState("");
  const [dataContributor, setDataContributor] = React.useState({
    email: "",
    fullname: "",
    identity_document_letter: "default",
    identity_document: "",
    phone_number: "",
    contributor_type: "default",
    birthdate: "1950-01-01",
    constitution_date: "1950-01-01",
    address: "",
    parish: "default",
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

        result = await UpdateUser({ params: dataContributor, session });

        if (
          result.data &&
          (result.statusCode !== 200 || result.status !== 200)
        ) {
          let message = result.data.message;

          setMessageError(message);
          setStateSnackbarError({
            ...stateSnackbarError,
            openSnackbarError: true,
          });
        } else {
          setMessageError("");
          setStateSnackbarError({
            ...stateSnackbarError,
            openSnackbarError: false,
          });
          setMessageSuccess("Modificación exitosa");
          setStateSnackbar({ ...stateSnackbar, openSnackbar: true });
        }
      } else {
        setMessageError("Debe ingresar todos los campos requeridos");
        setStateSnackbarError({
          ...stateSnackbarError,
          openSnackbarError: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendRequest = async () => {
    let data = await getProfiledUser(await getSession());

    let getStates = await getStatesAll();
    if (getStates) setStates(getStates);

    let getMunicipality = await getMunicipalityByState({
      state: data.parish.municipality.state.id,
    });
    if (getMunicipality) setMunicipalities(getMunicipality);

    let getParishes = await getParishesByMunicipality({
      municipality: data.parish.municipality.id,
    });
    if (getParishes) setParishes(getParishes);

    setStateSelect(data.parish.municipality.state.id);
    setMunicipalitySelect(data.parish.municipality.id);
    data.parish = data.parish.id;
    data.contributor_type = data.contributor_type.id;

    if (data) setDataContributor(data);
  };

  React.useEffect(() => {
    sendRequest();
  }, []);

  const handleStateChange = async (event) => {
    setMunicipalities([]);
    setMunicipalitySelect("default");
    setStateSelect(event.target.value);
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
    setParishes([]);
    setDataContributor((dataContributor) => ({
      ...dataContributor,
      parish: "default",
    }));
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

  const [stateSnackbar, setStateSnackbar] = React.useState({
    openSnackbar: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, openSnackbar } = stateSnackbar;

  const handleClose = () => {
    setStateSnackbar({ ...stateSnackbar, openSnackbar: false });
  };
  const [stateSnackbarError, setStateSnackbarError] = React.useState({
    openSnackbarError: false,
    verticalError: "top",
    horizontalError: "center",
  });
  const { verticalError, horizontalError, openSnackbarError } =
    stateSnackbarError;

  const handleCloseError = () => {
    setStateSnackbarError({ ...stateSnackbarError, openSnackbarError: false });
  };

  return (
    <>
      {messageError !== "" ? (
        <Box sx={{ width: 500 }}>
          <Snackbar
            open={openSnackbarError}
            autoHideDuration={3600}
            onClose={handleCloseError}
            anchorOrigin={{
              vertical: verticalError,
              horizontal: horizontalError,
            }}
            // message={messageError}
            // key={verticalError + horizontalError}
          >
            <Alert
              onClose={handleCloseError}
              severity="error"
              variant="filled"
              sx={{ width: "100%" }}
            >
              {messageError}
            </Alert>
          </Snackbar>
        </Box>
      ) : (
        <></>
      )}

      {messageSuccess !== "" ? (
        <Box sx={{ width: 500 }}>
          {/* <Snackbar
            open={openSnackbar}
            autoHideDuration={1200}
            onClose={handleClose}
            
            anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
            message={messageSuccess}
            key={vertical + horizontal}
          /> */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3600}
            onClose={handleClose}
            anchorOrigin={{ vertical: vertical, horizontal: horizontal }}
            // message={messageSuccess}
            // key={vertical + horizontal}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              variant="filled"
              sx={{ width: "100%" }}
            >
              {messageSuccess}
            </Alert>
          </Snackbar>
        </Box>
      ) : (
        <></>
      )}

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          padding: 5,
        }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mb: 2 },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleOnSubmit}
          >
            <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
              Datos Usuario
            </Divider>
            <TextField
              fullWidth
              value={dataContributor.email}
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

            <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
              Datos Personales
            </Divider>
            <TextField
              value={dataContributor.fullname}
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

            <Grid container>
              <Grid item xs={3}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="identity-document-letter-label" required>
                    Letra
                  </InputLabel>
                  <Select
                    required
                    disabled
                    labelId="identity-document-letter-label"
                    id="id-letter"
                    value={dataContributor.identity_document_letter}
                    label="Letra"
                    onChange={changeLetter}
                  >
                    <MenuItem key="default" value={"default"} disabled>
                      Seleccione una letra
                    </MenuItem>
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
                  disabled
                  fullWidth
                  type="text"
                  required
                  value={dataContributor.identity_document}
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
            {[
              LETTERS.VENEZOLANO.code,
              LETTERS.EXTRANJERO.code,
              LETTERS.PASAPORTE.code,
            ].includes(dataContributor.identity_document_letter) ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="type-contributor-natural-label" required>
                  Tipo de contribuyente Natural
                </InputLabel>
                <Select
                  required
                  labelId="type-contributor-natural-label"
                  id="type-contributor-natural"
                  value={dataContributor.contributor_type}
                  label="Tipo de contribuyente natural"
                  onChange={changeTypeContributor}
                >
                  <MenuItem key="default" value={"default"} disabled>
                    Seleccione un tipo
                  </MenuItem>
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

            {[
              LETTERS.JURIDICO.code,
              LETTERS.GUBERNAMENTAL.code,
              LETTERS.CONSEJO.code,
            ].includes(dataContributor.identity_document_letter) ? (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel id="type-contributor-legal-label" required>
                  Tipo de contribuyente Jurídico
                </InputLabel>
                <Select
                  labelId="type-contributor-legal-label"
                  id="type-contributor-legal"
                  value={dataContributor.contributor_type || "default"}
                  label="Tipo de contribuyente Jurídico"
                  onChange={changeTypeContributor}
                >
                  <MenuItem key="default" value={"default"} disabled>
                    Seleccione un tipo
                  </MenuItem>
                  {typesContributors.map((data, index) => {
                    if (
                      data.letters_contributors === "LEGAL" &&
                      !(
                        data.id === TYPES_CONTRIBUTORS.SUCESION.id &&
                        dataContributor.identity_document_letter ===
                          IDENTIY_DOCUMENT_LETTERS.LETTERS.CONSEJO.code
                      )
                    )
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

            {!isNaturalContributor() ? (
              <TextField
                id="constitution_date"
                type="date"
                fullWidth
                label="Fecha de constitución"
                value={dataContributor.constitution_date || getToday()}
                required
                InputLabelProps={{ shrink: true }}
                onChange={(e) =>
                  setDataContributor((dataContributor) => ({
                    ...dataContributor,
                    constitution_date: e.target.value,
                  }))
                }
              />
            ) : (
              <TextField
                id="birthdate"
                type="date"
                fullWidth
                label="Fecha de nacimiento"
                value={dataContributor.birthdate || getToday()}
                required
                onChange={(e) =>
                  setDataContributor((dataContributor) => ({
                    ...dataContributor,
                    birthdate: e.target.value,
                  }))
                }
              />
            )}

            <SelectStates
              states={states}
              dataContributor={dataContributor}
              stateSelect={stateSelect}
              handleStateChange={handleStateChange}
            />

            <SelectMunicipalities
              municipalities={municipalities}
              municipalitySelect={municipalitySelect}
              handleMunicipalityChange={handleMunicipalityChange}
            />
            <SelectParishes
              parishes={parishes}
              municipalitySelect={municipalitySelect}
              setDataContributor={setDataContributor}
              dataContributor={dataContributor}
            />

            <TextField
              required
              fullWidth
              label="Dirección"
              placeholder="Ingrese dirección"
              value={dataContributor.address}
              onChange={(e) =>
                setDataContributor((dataContributor) => ({
                  ...dataContributor,
                  address: e.target.value,
                }))
              }
            />

            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Guardar
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
