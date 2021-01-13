import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  ul {
    display: flex;
  }
  li {
    margin-right: 10%;
    border: 1px solid;
    border-radius: 1em;
    padding-left: 1em;
    padding-right: 1em;
  }
  li:hover {
    background-color: rgb(246, 199, 0);
  }
`;
