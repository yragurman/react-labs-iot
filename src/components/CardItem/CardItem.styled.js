import styled from "styled-components";

export const UlItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  li {
    max-width: 25%;
    margin-right: 5%;
    margin-top: 2%;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-around;
`;
