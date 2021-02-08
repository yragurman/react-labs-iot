import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };
  return (
    <>
      <input
        className="input"
        onChange={handleInput}
        type="text"
        value={searchText}
        placeholder="Search your movies"
      />
      <button
        onClick={() => {
          onSearch(searchText);
        }}
      >
        Submit
      </button>
    </>
  );
};

export default SearchBox;
