import axios from "axios";

import BASE_URL from "../constance";

export const getAllFilms = async () =>
  await axios.get(`${BASE_URL}api/film`).then((res) => res.json());
