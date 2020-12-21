import React from "react";
import { Header, Heading1, Paragraph, TextWrapper } from "./Home.styled";

import CardItem from "../components/CardItem/CardItem.js";
import MoviesOnTV from "../video/MoviesOnTV.mp4";
function Home() {
  return (
    <div>
      <Header>
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src={MoviesOnTV} type="video/mp4" />
        </video>
        <TextWrapper>
          <Heading1>IMDb TV</Heading1>
          <Paragraph>
            We launched Freedive, a streaming service that offers certain films
            free with advertisements.
          </Paragraph>
        </TextWrapper>
      </Header>
      <CardItem />
    </div>
  );
}

export default Home;
