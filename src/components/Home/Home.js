import React, { useState } from "react";
import { Header, Heading1, Paragraph, TextWrapper } from "./Home.styled";

import MoviesOnTV from "../../video/MoviesOnTV.mp4";

import CardItem from "./CardItem";

import { Films } from "../films";

function Home() {
  const [films, setFilms] = useState(Films);
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
      <h1
        style={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
      >
        Films:
      </h1>
      <CardItem films={films} />
    </div>
  );
}

export default Home;
