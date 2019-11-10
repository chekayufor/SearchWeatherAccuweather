import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const Links = () => (
  <Nav>
    <Li>
      <StyledLink to="/" smooth>
        Home
      </StyledLink>
    </Li>
    <Li>
      <StyledLink to="/favorites" smooth>
        Favorites
      </StyledLink>
    </Li>
  </Nav>
);

export default Links;

const StyledLink = styled(Link)`
  color: mintcream;
`;

const Nav = styled.ul`
  padding:0 60px;
  display: flex;
  list-style-type: none;
  font-family: "Yanone Kaffeesatz";
  font-weight: 400;
  font-size: 2.8rem;
  // width: 30rem;
  justify-content: space-between;
`;
const Li = styled.li`
  padding-right:10px;

`