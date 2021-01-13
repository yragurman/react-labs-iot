import React, { useState } from "react";

import { SearchWrapper } from "./Search.styled";

function Search({ films }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  if (input.length > 0) {
    films = films.filter((items) => {
      return items.name.match(input);
    });
  }
  return (
    <SearchWrapper>
      <input className="search__input" type="text" placeholder="Search"></input>
      <button>Seacrh</button>
    </SearchWrapper>
  );
}

export default Search;
