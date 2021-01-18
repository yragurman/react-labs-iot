import React from "react";

import {
  CardWrapper,
  ButtonWrapper,
  Select,
  AddToCart,
  PriceRateWrapper,
} from "./CardItemCatalog.styled";

const CardItemCatalog = ({ films }) => {
  return (
    <CardWrapper>
      <ul>
        {films.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="Film_image"></img>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <PriceRateWrapper>
              <p>Price: {item.price} grn</p>
              <p>Rate: {item.rate} stars</p>
            </PriceRateWrapper>
            <ButtonWrapper>
              <Select>Select</Select>
              <AddToCart>Add to cart</AddToCart>
            </ButtonWrapper>
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
};

export default CardItemCatalog;
