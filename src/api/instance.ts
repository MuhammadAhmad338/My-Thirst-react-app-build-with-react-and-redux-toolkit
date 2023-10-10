import axios from "axios";

export const instance = axios.create({
  baseURL: "https://thirstapp-c2g74jsita-uc.a.run.app/api/",
  timeout: 1000,
});

export const userconfig = {
  headers: {
    "Content-Type": "application/json", // Set the content type you expect from the server,
  },
};

export const productconfig = {
  headers: {
    "Content-Type": "application/json", // Set the content type you expect from the server,
    authorization: `${localStorage.getItem("token")}`,
  },
};
