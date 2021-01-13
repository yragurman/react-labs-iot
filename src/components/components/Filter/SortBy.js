import React from "react";
import { SortByWrapper } from "./SortBy.styled";

function SortBy({ items }) {
  return (
    <SortByWrapper>
      <p>Sort by:</p>
      <ul>
        {items.map((sortBy, index) => (
          <li type="button" key={`${sortBy}_${index}`}>
            {sortBy}
          </li>
        ))}
      </ul>
    </SortByWrapper>
  );
}

export default SortBy;
