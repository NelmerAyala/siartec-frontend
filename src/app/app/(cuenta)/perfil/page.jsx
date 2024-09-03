"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import TYPES_CONTRIBUTORS from "@/common/TYPES_CONTRIBUTORS";
import moment from "moment";
import { getSession, useSession } from "next-auth/react";
import { getProfiledUser } from "@/services/user/get-profile-services";
// import MuiPhoneNumber from "mui-phone-number";

const typesContributors = [
  { id: 1, description: "Natural" },
  { id: 2, description: "Comercial" },
  { id: 3, description: "Industrial" },
  { id: 4, description: "Firma Personal" },
];

export default function PayTaxStamps() {
  const paperStyle = {
    padding: 20,
    // width: 300,
    margin: "0.5rem",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "rgb(254 151 76)" };
  const marginTop = { marginTop: 5 };

  const [typeContributor, setTypeContributor] = React.useState("");
  const [profileUser, setprofileUser] = React.useState({
    identity_document_letter: "",
    lastname: "",
    firstname: "",
    image: "",
    email: "",
    birthdate: "",
    constitution_date: "",
    identity_document: "",
    phone_number: "",
  });
  const [letter, setLetter] = React.useState("");
  const [isJuridicSignature, setIsJuridicSignature] = React.useState(false);

  const sendRequest = async () => {
    let data = await getProfiledUser(await getSession());
    console.log(data);
    if (data) setprofileUser(data);
  };

  React.useEffect(() => {
    sendRequest();
  }, []);

  const changeTypeContributor = (event) => {
    setTypeContributor(event.target.value);
    if (
      typeContributor !==
      TYPES_CONTRIBUTORS.getTypeContributorByName("NATURAL").id
    )
      setIsJuridicSignature(false);
  };

  const changeLetter = (event) => {
    setLetter(event.target.value);
  };

  const isNaturalContributor = () => {
    return typeContributor ===
      TYPES_CONTRIBUTORS.getTypeContributorByName("NATURAL").id
      ? true
      : false;
  };

  const handleSubmit = () => {
    console.log("Guardar cambios");
  };

  const getToday = () => {
    let today = moment(
      profileUser.birthdate || profileUser.constitution_date
    ).format("YYYY-MM-DD");
    return today;
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/img/background-card.webp"
                alt="backgroud profile"
              />
              <CardContent>
                <Avatar
                  alt={profileUser.lastname + " " + profileUser.firstname}
                  src={profileUser.image}
                  sx={{ width: 100, height: 100 }}
                />
                <Typography gutterBottom variant="h5" component="div">
                  {profileUser.lastname + " " + profileUser.firstname}
                </Typography>
                <Typography variant="body">
                  Tu información personal es importante para la generación de
                  estampillas fiscales, por eso aquí puedes realizar las
                  modificaciones necesarias.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mb: 2 },
            }}
            noValidate
            autoComplete="off"
          >
            <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
              Datos Personales
            </Divider>
            <TextField
              color="secondary"
              value={profileUser.firstname}
              fullWidth
              label="Nombres"
              placeholder="Ingrese correo electrónico"
            />
            <TextField
              color="secondary"
              value={profileUser.lastname}
              fullWidth
              label="Apellidos"
              placeholder="Ingrese correo electrónico"
            />
            <TextField
              color="secondary"
              value={profileUser.email}
              fullWidth
              label="Correo Electrónico"
              placeholder="Ingrese correo electrónico"
            />
            <TextField
              color="secondary"
              // value={profileUser.birthdate || profileUser.constitution_date}
              type="date"
              value={getToday()}
              fullWidth
              label="Fecha de nacimiento"
            />

            <Grid container spacing={0}>
              <Grid item xs={1}>
                <FormControl color="secondary" fullWidth>
                  <InputLabel id="letter-label">Letra</InputLabel>
                  <Select
                    // value={letter}
                    labelId="letter-label"
                    id="letter"
                    value={profileUser.identity_document_letter}
                    label="Letra"
                    onChange={changeLetter}
                  >
                    <MenuItem key={"V"} value={"V"}>
                      {"V"}
                    </MenuItem>
                    <MenuItem key={"E"} value={"E"}>
                      {"E"}
                    </MenuItem>
                    <MenuItem key={"J"} value={"J"}>
                      {"J"}
                    </MenuItem>
                    <MenuItem key={"G"} value={"G"}>
                      {"G"}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={1}></Grid>
              <Grid item xs={10}>
                <TextField
                  color="secondary"
                  fullWidth
                  value={profileUser.identity_document}
                  type="text"
                  label="Documento de Identifiación"
                  placeholder="Ingrese documento de identidad"
                />
              </Grid>
            </Grid>

            <TextField
              value={profileUser.phone_number}
              fullWidth
              label="Número de Teléfono"
              placeholder="Ingrese número de teléfono"
            />

            <Divider textAlign="left" sx={{ width: "100%", mb: 2, mt: 4 }}>
              Datos Contribuyente
            </Divider>
            <FormControl color="secondary" fullWidth>
              <InputLabel id="type-contributor-label">
                Tipo de contribuyente
              </InputLabel>
              <Select
                labelId="type-contributor-label"
                id="type-contributor"
                value={profileUser.contributorTypeId}
                label="Tipo de contribuyente"
                onChange={changeTypeContributor}
              >
                {typesContributors.map((data, index) => (
                  <MenuItem key={data.id} value={data.id}>
                    {data.description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {isNaturalContributor() ? (
              <FormControlLabel
                control={<Checkbox name="checked-allrules" color="secondary" />}
                label="Es firma personal."
              />
            ) : (
              <></>
            )}
          </Box>
        </Grid>

        <Grid item xs={4}></Grid>
        <Grid item xs={8}>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            href="#"
            onClick={() => handleSubmit()}
          >
            Guardar
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
