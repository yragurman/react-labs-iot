import React, { useState, useEffect } from "react";
import axios from "axios";

const FilmList = () => {
  const [film, setFilm] = useState([]);
  const BASE_URL = "http://localhost:5000/";
  const RESOURCE_URL = `${BASE_URL}api/film`;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(RESOURCE_URL);
      setFilm(data);
    };
    fetchData();
    return () => {};
  }, [RESOURCE_URL]);
};
return(
    <div>
    {film.map(film)=>( )}
    </div>
)
export default FilmList;
