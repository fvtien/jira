import axios from "axios";

const getToken = () => localStorage.getItem("jwtToken");

export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  responseType: "json",
  headers: {
    Authorization: `${getToken()}`,
  },
});
