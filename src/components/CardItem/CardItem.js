import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { Button, Card } from "react-bootstrap";

import { UlItems, Price } from "./CardItem.styled";

function CardItem(props) {
  const [films, setFilm] = useState([]);
  const BASE_URL = "http://localhost:5000/";
  const RESOURCE_URL = `${BASE_URL}api/film`;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(RESOURCE_URL);
      setFilm(data);
    };
    fetchData();
    return () => {};
  }, [RESOURCE_URL]);
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <UlItems>
      {films.map((film) => (
        <li key={film._id}>
          <Card style={{ width: "18rem" }}>
            <Link to={film._id}>
              <Card.Img
                variant="top"
                src={BASE_URL + film.filmImage}
                alt="product"
              />
            </Link>
            <Card.Body>
              <Card.Title>{film.title}</Card.Title>
              <Card.Text>{film.description}</Card.Text>
              <Price>
                <Card.Text>Price:</Card.Text>
                <Card.Text>{film.price} ₴</Card.Text>
              </Price>
              <Button variant="success">Add to cart</Button>
            </Card.Body>
          </Card>
        </li>
      ))}
    </UlItems>
  );
  const linkName = readMore ? "Read Less << " : "Read More >> ";
  return (
    <div className="App">
      {readMore && extraContent}
      <button
        onClick={() => {
          setReadMore(!readMore);
        }}
      >
        <h2>{linkName}</h2>
      </button>
    </div>
  );
}
export default CardItem;
