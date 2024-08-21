import axios from "axios";
import { Alert } from "@mui/material";

const Request = axios.create();

Request.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.NEXT_PUBLIC_ENDPOINT;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

Request.interceptors.response.use(
  function (response) {
    console.log("response (Request):" + response);

    return response.data;
  },
  function (error) {
    console.log("error (Request):" + JSON.stringify(error));
    let data = error.response;

    if (data.status === 401) {
      if (data.message) {
        <Alert severity="error"> {data.message} </Alert>;
      }
    }

    return data;
  }
);

export default Request;
