import React from "react";

import {
  FilterWrapper,
  CatalogWrapper,
  SearchWrapper,
  FilmsWrapper,
} from "./Catalog.styled";

import { Categories, SortBy } from "../components/Filter";
import Search from "../components/Search";
import Films from "../films";

import CardItem from "../components/CardItem";

function Catalog() {
  return (
    <CatalogWrapper>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
      <FilterWrapper>
        <Categories items={["Drama", "Action", "Crime", "Romance", "Comedy"]} />
        <SortBy items={["Name", "Price", "Rate"]} />
      </FilterWrapper>
      <h1>Films</h1>
      <FilmsWrapper>
        <CardItem films={Films} />
      </FilmsWrapper>
    </CatalogWrapper>
  );
}

export default Catalog;
