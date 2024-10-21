import React, { useEffect } from "react";
import moment from "moment";
import { MenuItem, InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

const SelectMunicipalities = (props) => {
  const [states, setStates] = React.useState([]);

  useEffect(() => {
    setStates(props.states);
  }, [props.states]);

  return (
    <>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="municipality-label" required>
          Estado
        </InputLabel>
        <Select
          required
          labelId="state-label"
          id="id-state"
          value={props.stateSelect}
          label="Estado"
          onChange={props.handleStateChange}
        >
          <MenuItem key={0} value={"default"}>
            Seleccione el estado
          </MenuItem>
          {states.map((data) => (
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
