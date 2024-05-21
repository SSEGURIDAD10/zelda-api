import axios from "axios";

const BASE_URL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/all'

const getCharacter = async() => axios.get(BASE_URL)

export default getCharacter