import styled from "styled-components";

export const Header = styled.div`
  color: #fff;
  position: relative;
`;

export const Heading1 = styled.h1`
  margin-block-start: 0;
`;

export const Paragraph = styled.p`
  display: flex;
  align-content: center;
  width: 50%;
`;
export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10%;
  font-size: 140%;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  button {
    display: inline-block;
    padding: 0.7em 1.4em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 0.15em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    color: Black;
    background-color: #f6c700;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    text-align: center;
    position: relative;
    border-radius: 10px;
  }
  button:active {
    top: 0.1em;
  }
  margin-bottom: 10%;
`;
