import React from "react";

import { CardWrapper } from "./CardItem.styled";

const CardItem = ({ films }) => {
  return (
    <CardWrapper>
      <ul>
        {films.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="Film_image"></img>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
};

export default CardItem;
