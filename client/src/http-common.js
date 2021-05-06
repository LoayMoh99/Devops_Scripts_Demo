import axios from "axios";

const url = require("./url");
export default axios.create({
  baseURL: "http://localhost:81/api",
  headers: {
    "Content-type": "application/json"
  }
});