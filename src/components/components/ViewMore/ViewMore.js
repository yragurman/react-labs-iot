import { useState, useEffect } from "react";

const filmsPerPage = 2;
let arrayForHoldingFilms = [];
const ViewMore = (films) => {
  const [filmsToShow, setFilmsToShow] = useState([]);
  const [next, setNext] = useState(2);
  const loopWithSlice = (start, end) => {
    const slicedFilms = films.slice(start, end);
    arrayForHoldingFilms = [...arrayForHoldingFilms, ...slicedFilms];
    setFilmsToShow(arrayForHoldingFilms);
  };
  useEffect(() => {
    loopWithSlice(0, filmsPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleShowMoreFilms = () => {
    loopWithSlice(next, next + filmsPerPage);
    setNext(next + filmsPerPage);
  };
  return { Show: filmsToShow, More: handleShowMoreFilms };
};

export default ViewMore;
