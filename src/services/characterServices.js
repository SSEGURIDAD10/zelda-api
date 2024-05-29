import axios from "axios";

const BASE_URL = `https://botw-compendium.herokuapp.com/api/v3/compendium/`;

const getCharacter = async (nombre) => {
  if (nombre) {
    return axios.get(`${BASE_URL}/category/${nombre}`);
  } else {
    return axios.get(`${BASE_URL}`);
  }
// return axios.get(`${BASE_URL}`);
};

export default getCharacter;
