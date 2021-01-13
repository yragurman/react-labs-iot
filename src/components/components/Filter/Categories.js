import React from "react";
import { CategoriesWrapper } from "./Categories.styled";

function Categories({ items }) {
  return (
    <CategoriesWrapper>
      <ul>
        <li type="button">All</li>
        {items.map((categories, index) => (
          <li type="button" key={`${categories}_${index}`}>
            {categories}
          </li>
        ))}
      </ul>
    </CategoriesWrapper>
  );
}

export default Categories;
