import axios from "axios";

export default axios.create({
  baseURL: "http://dropoidsdemo-env.eba-cpd49qay.us-east-2.elasticbeanstalk.com/api",
  headers: {
    "Content-type": "application/json"
  }
});