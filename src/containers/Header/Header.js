import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, LogoWrapper, ImgLogo, Navigation } from "./Header.styled";
import Logo from "../../image/IMDB_Logo.svg";
function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <ImgLogo src={Logo} alt="Logo"></ImgLogo>
      </LogoWrapper>
      <Navigation>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </Navigation>
    </Wrapper>
  );
}

export default Header;
