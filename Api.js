import axios from "axios";

export default axios.create({
  baseURL: "https://notelize.herokuapp.com",
//   responseType: "json"
});