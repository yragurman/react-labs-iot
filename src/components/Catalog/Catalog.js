import React, { useState } from "react";

import {
  FilterWrapper,
  CatalogWrapper,
  SearchWrapper,
  FilmsWrapper,
} from "./Catalog.styled";

import { Categories, SortBy } from "../components/Filter";
import Search from "../components/SearchBox";
import Films from "../films";

import CardItemCatalog from "../components/CardItemCatalog";

function Catalog() {
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  const SearchData = (index) => {
    setSearch(index);
  };
  const [searchResults, setSearchResults] = React.useState([]);
  React.useEffect(() => {
    const results = Films.filter((film) =>
      film.title.toLowerCase().includes(search)
    );
    setSearchResults(results);
  }, [search]);
  return (
    <CatalogWrapper>
      <SearchWrapper>
        <Search onSearch={SearchData} />
      </SearchWrapper>
      <FilterWrapper>
        <Categories items={["Drama", "Action", "Crime", "Romance", "Comedy"]} />
        <SortBy items={["Name", "Price", "Rate"]} />
      </FilterWrapper>
      <h1>Films</h1>
      <FilmsWrapper>
        <CardItemCatalog films={searchResults} />
      </FilmsWrapper>
    </CatalogWrapper>
  );
}

export default Catalog;
