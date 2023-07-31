import axios from "axios";

const url = `https://api.unsplash.com/search`;

const customAxios = axios.create({
  baseURL: url,
});

export default customAxios;
