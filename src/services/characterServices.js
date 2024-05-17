import axios from "axios";

const BASE_URL = 'https://zelda.fanapis.com/api/characters'

const getCharacter = async() => axios.get(BASE_URL)

export default getCharacter
