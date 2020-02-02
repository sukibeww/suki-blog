import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { AiOutlineBlock } from "react-icons/ai";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 0.8rem 30vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(292deg, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 20%,rgba(151, 151, 151, 0.03) 20%, rgba(151, 151, 151, 0.03) 40%,rgba(215, 215, 215, 0.03) 40%, rgba(215, 215, 215, 0.03) 60%,rgba(254, 254, 254, 0.03) 60%, rgba(254, 254, 254, 0.03) 80%,rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%),linear-gradient(62deg, rgba(34, 34, 34, 0.03) 0%, rgba(34, 34, 34, 0.03) 20%,rgba(171, 171, 171, 0.03) 20%, rgba(171, 171, 171, 0.03) 40%,rgba(206, 206, 206, 0.03) 40%, rgba(206, 206, 206, 0.03) 60%,rgba(210, 210, 210, 0.03) 60%, rgba(210, 210, 210, 0.03) 80%,rgba(69, 69, 69, 0.03) 80%, rgba(69, 69, 69, 0.03) 100%),linear-gradient(314deg, rgba(235, 235, 235, 0.03) 0%, rgba(235, 235, 235, 0.03) 20%,rgba(254, 254, 254, 0.03) 20%, rgba(254, 254, 254, 0.03) 40%,rgba(178, 178, 178, 0.03) 40%, rgba(178, 178, 178, 0.03) 60%,rgba(211, 211, 211, 0.03) 60%, rgba(211, 211, 211, 0.03) 80%,rgba(73, 73, 73, 0.03) 80%, rgba(73, 73, 73, 0.03) 100%),linear-gradient(32deg, rgba(182, 182, 182, 0.01) 0%, rgba(182, 182, 182, 0.01) 12.5%,rgba(208, 208, 208, 0.01) 12.5%, rgba(208, 208, 208, 0.01) 25%,rgba(178, 178, 178, 0.01) 25%, rgba(178, 178, 178, 0.01) 37.5%,rgba(143, 143, 143, 0.01) 37.5%, rgba(143, 143, 143, 0.01) 50%,rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.01) 62.5%,rgba(92, 92, 92, 0.01) 62.5%, rgba(92, 92, 92, 0.01) 75%,rgba(56, 56, 56, 0.01) 75%, rgba(56, 56, 56, 0.01) 87.5%,rgba(253, 253, 253, 0.01) 87.5%, rgba(253, 253, 253, 0.01) 100%),linear-gradient(247deg, rgba(103, 103, 103, 0.02) 0%, rgba(103, 103, 103, 0.02) 12.5%,rgba(240, 240, 240, 0.02) 12.5%, rgba(240, 240, 240, 0.02) 25%,rgba(18, 18, 18, 0.02) 25%, rgba(18, 18, 18, 0.02) 37.5%,rgba(38, 38, 38, 0.02) 37.5%, rgba(38, 38, 38, 0.02) 50%,rgba(246, 246, 246, 0.02) 50%, rgba(246, 246, 246, 0.02) 62.5%,rgba(9, 9, 9, 0.02) 62.5%, rgba(9, 9, 9, 0.02) 75%,rgba(167, 167, 167, 0.02) 75%, rgba(167, 167, 167, 0.02) 87.5%,rgba(86, 86, 86, 0.02) 87.5%, rgba(86, 86, 86, 0.02) 100%),linear-gradient(90deg, hsl(194,0%,10%),hsl(194,0%,10%));
`

const Title = styled.h1`
  display: flex;
  color: white;
  margin: 0;
  font-weight: 800;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <Title>{siteTitle}<AiOutlineBlock/></Title>
    </Link>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
