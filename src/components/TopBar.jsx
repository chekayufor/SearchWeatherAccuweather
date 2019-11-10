import React from "react";
import styled from "styled-components";

const TopBar = ({ children }) => (
  <Box>
    <Text>{children}</Text>
  </Box>
);

export default TopBar;

const Box = styled.div`
  grid-area:1/1/2/2;
  background: slategray;
  width: 100%;
  height: 45px;
  padding: 20px 0;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Text = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  font-family: "Griffy", cursive;
  color: papayawhip;
  cursor: pointer;
  user-select: none;
  position: relative;
`;
