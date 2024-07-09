import React from 'react'
import moment from 'moment';
import { Grid, Paper, Avatar, Typography, TextField, Button, Box, MenuItem, InputLabel, Divider, Link } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Checkbox from '@mui/material/Checkbox';
import TYPES_CONTRIBUTORS from '@/common/TYPES_CONTRIBUTORS'
// import MuiPhoneNumber from "mui-phone-number";


const typesContributors = [
  { id: 1, description: 'Natural', },
  { id: 2, description: 'Comercial', },
  { id: 3, description: 'Industrial', },
]


const Signup = () => {
  const paperStyle = {
    padding: 20,
    // width: 300, 
    margin: "0.5rem"
  }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroundColor: 'rgb(254 151 76)' }
  const marginTop = { marginTop: 5 }

  const [typeContributor, setTypeContributor] = React.useState('');
  const [letter, setLetter] = React.useState('');
  const [isJuridicSignature, setIsJuridicSignature] = React.useState(false);

  const changeTypeContributor = (event) => {
    setTypeContributor(event.target.value);
    if (typeContributor !== TYPES_CONTRIBUTORS.getTypeContributorByName('NATURAL').id) setIsJuridicSignature(false)
  };

  const changeLetter = (event) => {
    setLetter(event.target.value);
  };

  const isNaturalContributor = () => {
    return typeContributor === TYPES_CONTRIBUTORS.getTypeContributorByName('NATURAL').id ? true : false;
  }

  const onPhoneNumberChanged = (event) => {
    console.log(event);
    // console.log(phoneNumber); // +4176 123 45 67
    // console.log(country); // { name: "Switzerland", dialCode: "41", countryCode: "ch" }
  };

  const handleSubmit = () => {
    console.log("submit");
  };

  const getToday = () => {
    let today = moment().format('YYYY-MM-DD');
    return today;
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <Grid container justifyContent="center" sx={{ my: 2 }}>
            <h2>Crear cuenta</h2>
          </Grid>
          <Typography gutterBottom>Por favor llene este formulario para crear su cuenta!</Typography>
        </Grid>

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { mb: 2, },
          }}
          noValidate
          autoComplete="off"
        >

          {/* <form> */}
          {/* 
          firstname
          lastname
          email
          identity_document_letter
          identity_document
          birthdate
          address
          phone_number
        */}
          <Divider textAlign="left" sx={{ width: '100%', mb: 2, mt: 4 }}>Datos Personales</Divider>
          <TextField color='secondary' fullWidth label='Nombres' placeholder="Ingrese correo electrónico" />
          <TextField color='secondary' fullWidth label='Apellidos' placeholder="Ingrese correo electrónico" />
          <TextField color='secondary' fullWidth label='Correo Electrónico' placeholder="Ingrese correo electrónico" />
          <TextField color='secondary' type='date' defaultValue={getToday()} fullWidth label='Fecha de nacimiento' />

          <Grid container spacing={0}>
            <Grid item xs={3}>
              <FormControl color='secondary'>
                <InputLabel id="letter-label">Letra</InputLabel>
                <Select
                  labelId="letter-label"
                  id="letter"
                  value={letter}
                  label="Letra"
                  onChange={changeLetter}
                >
                  <MenuItem key={'V'} value={'V'}>{'V'}</MenuItem>
                  <MenuItem key={'E'} value={'E'}>{'E'}</MenuItem>
                  <MenuItem key={'J'} value={'J'}>{'J'}</MenuItem>
                  <MenuItem key={'G'} value={'G'}>{'G'}</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={9}>
              <TextField color='secondary' fullWidth type='phone' label='Documento de Identifiación' placeholder="Ingrese correo electrónico" />
            </Grid>


          </Grid>

          <TextField fullWidth label='Número de Teléfono' placeholder="Ingrese número de teléfono" />

          {/* <MuiPhoneNumber color='secondary' fullWidth variant="outlined" defaultCountry="ve" label='Número de Teléfono' placeholder="Ingrese número de teléfono" onChange={onPhoneNumberChanged} /> */}

          {/* 
          type_contributor
          constitution_date
          */}
          <Divider textAlign="left" sx={{ width: '100%', mb: 2, mt: 4 }}>Datos Contribuyente</Divider>
          <FormControl color='secondary' fullWidth>
            <InputLabel id="type-contributor-label">Tipo de contribuyente</InputLabel>
            <Select
              labelId="type-contributor-label"
              id="type-contributor"
              value={typeContributor}
              label="Tipo de contribuyente"
              onChange={changeTypeContributor}
            >
              {
                typesContributors.map((data, index) => (
                  <MenuItem key={data.id} value={data.id}>{data.description}</MenuItem>
                ))
              }
            </Select>
          </FormControl>

          {isNaturalContributor() ? <FormControlLabel
            control={<Checkbox name="checked-allrules" color='secondary' />}
            label="Es firma personal."
          /> : <></>}



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
              href="#" onClick={() => handleSubmit()}
            >
              Crear cuenta
            </Button>
          </Grid>

          {/* </form> */}
        </Box>
      </Paper>
    </Grid>
  )
}

export default Signup;