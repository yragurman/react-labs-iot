import React from "react";

import { CardWrapper } from "./CardItem.styled";

function CardItem(props) {
  return (
    <CardWrapper>
      <ul>
        {props.films.map((item) => (
          <li>
            <img src={item.image} alt="Film_image"></img>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
}

export default CardItem;
