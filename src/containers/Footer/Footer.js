import React from "react";
import Logo from "../../image/IMDB_Logo.svg";
import {
  LogoWrapper,
  ImgLogo,
  Wrapper,
  Inc,
  IconsWrapper,
  IconBase,
} from "./Footer.styled";
import {
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

function Footer() {
  return (
    <Wrapper>
      <hr></hr>
      <LogoWrapper>
        <ImgLogo src={Logo} alt="Logo"></ImgLogo>
      </LogoWrapper>
      <IconsWrapper>
        <IconBase component={YoutubeOutlined} />
        <IconBase component={TwitterOutlined} />
        <IconBase component={LinkedinOutlined} />
        <IconBase component={InstagramOutlined} />
        <IconBase component={FacebookOutlined} />
      </IconsWrapper>
      <hr width="80%"></hr>
      <Inc>© 1990-2020 by IMDb.com, Inc.</Inc>
    </Wrapper>
  );
}

export default Footer;
