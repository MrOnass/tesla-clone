import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a href="#h">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#m">Model S</a>
        <a href="#m">Model 3</a>
        <a href="#m">Model X</a>
        <a href="#m">Model Y</a>
      </Menu>
      <RightMenu>
      <a href="#m">Shop</a>
      <a href="#m">Tesla Account</a>
      </RightMenu>
    </Container>
  );
}
const Container = styled.div`
min-height :60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px
top:0;
left: 0;
right:0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

export default Header;
