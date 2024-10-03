import { useFetch } from "../../hooks/useFetch";
import Message from "./Message";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error } = useFetch(url);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let options = data.response[title];
  console.log(options);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel htmlFor={id} id={id}>
          {label}
        </InputLabel>
        {/* <label htmlFor={id}>{label}</label> */}
        <Select name={id} id={id} onChange={handleChange}>
          {/* <option value="">Elige un {title}</option> */}
          {data &&
            options.map((el) => (
              // <option key={el} value={el}>
              //   {el}
              // </option>
              <MenuItem key={el} value={el}>
                {el}
              </MenuItem>
            ))}
        </Select>
        <br />
      </FormControl>
    </>
  );
};

/*<label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          options.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
      */

export default SelectList;
