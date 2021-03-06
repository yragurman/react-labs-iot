import React from "react";
import {
  Header,
  ButtonWrapper,
  Heading1,
  Paragraph,
  TextWrapper,
} from "./Home.styled";

import MoviesOnTV from "../../video/MoviesOnTV.mp4";

import CardItem from "../components/CardItem";

import Films from "../films";

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
      <h1
        style={{ display: "flex", justifyContent: "center", marginTop: "10vh" }}
      >
        Films:
      </h1>
      <CardItem films={Films} />
    </div>
  );
}

export default Home;
