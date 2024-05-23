import axios from "axios";

const BASE_URL = `https://botw-compendium.herokuapp.com/api/v3/compendium`;

const getCharacter = async (nombre) => axios.get(`${BASE_URL}`)

export default getCharacter;
