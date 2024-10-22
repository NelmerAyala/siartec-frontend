import React, { useEffect } from "react";
import moment from "moment";
import { MenuItem, InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

const SelectMunicipalities = (props) => {
  const [municipalities, setMunicipalities] = React.useState([]);

  useEffect(() => {
    setMunicipalities(props.municipalities);
  }, [props.municipalities]);

  return (
    <>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="municipality-label" required>
          Municipio
        </InputLabel>
        <Select
          required
          labelId="municipality-label"
          id="id-municipality"
          value={props.municipalitySelect || "default"}
          label="Municipio"
          onChange={props.handleMunicipalityChange}
        >
          <MenuItem key="default" value={"default"} disabled>
            Seleccione un Municipio
          </MenuItem>
          {municipalities.map((data) => (
            <MenuItem key={data.id} value={data.id}>
              {data.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default SelectMunicipalities;
