import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "./cartIcon";

const Header = styled.header`
  height: 80px;
  box-shadow: 0px 4px 8px rgba(141, 141, 141, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 80px;
  }

  @media (min-width: 1280px) {
    padding: 0 100px;
  }

  @media (min-width: 1600px) {
    padding: 0 120px;
  }

  @media (min-width: 1920px) {
    padding: 0 140px;
  }
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
`;

const Li = styled.li`
  margin-right: 100px;
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    color: #9381ff;
  }
`;

export default function NavBar() {
  return (
    <Header>
      <Nav>
        <Ul>
          <Li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </Li>
          <Li>
            <StyledNavLink to="/shop">Shop</StyledNavLink>
          </Li>
          <Li>
            <StyledNavLink to="/about">About</StyledNavLink>
          </Li>
        </Ul>
      </Nav>
      <Link to="/cart">
        <CartIcon />
      </Link>
    </Header>
  );
}
