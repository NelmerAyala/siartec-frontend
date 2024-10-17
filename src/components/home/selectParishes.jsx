import React, { useEffect } from "react";
import moment from "moment";
import { MenuItem, InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

const SelectParishes = (props) => {
  const [parishes, setParishes] = React.useState([]);
  useEffect(() => {
    setParishes(props.parishes);
  }, [props.parishes]);

  return (
    <>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="parishes-label">Parroquia</InputLabel>
        <Select
          required
          labelId="parishes-label"
          id="id-parishes"
          value={props.dataContributor.parishes}
          disabled={props.municipalitySelect == []}
          label="Parroquia"
          onChange={(e) =>
            props.setDataContributor((dataContributor) => ({
              ...dataContributor,
              parish: e.target.value,
            }))
          }
        >
          {parishes.map((data) => (
            <MenuItem key={data.id} value={data.id}>
              {data.description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default SelectParishes;
