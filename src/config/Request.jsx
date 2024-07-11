import axios from "axios";
import { Alert } from "@mui/material";

const Request = axios.create();

// require("dotenv").config();

Request.interceptors.request.use(
  (config) => {
    let token = window.sessionStorage.getItem("token");
    config.headers["Authorization"] = token;
    config.headers["Content-Type"] = 'application/json';

    config.baseURL = process.env.NEXT_PUBLIC_ENDPOINT;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

Request.interceptors.response.use(
  function (response) {
    console.log(response)
    let data = response.data;
    console.log(data);

    // Request.status = response.status;

    if (data.message) {
      console.log("ejemplo");
      <Alert severity="info" > Ekemplo </Alert >
    }

    return data;
  },
  function (error) {
    let data = error.response.data;
    // Request.status = error.response.status;

    if (data.status === 401) {
      if (data.message) {
        <Alert severity="error" > {data.message} </Alert>
      }
    }

    return data;
  }
);

export default Request;
