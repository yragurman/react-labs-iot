import React, { useState } from "react";

import { SearchWrapper } from "./Search.styled";

function Search(props) {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState("");
  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };
  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };
  return (
    <SearchWrapper>
      <input
        onChange={handleInput}
        onKeyPress={handleEnterKeyPressed}
        value={searchText}
        type="text"
        placeholder="Search"
      />
    </SearchWrapper>
  );
}

export default Search;
