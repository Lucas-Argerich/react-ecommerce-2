import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import CartIcon from "./cartIcon";
import MenuButton from "./menuButton";

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 40px;
    box-shadow: 0px 4px 8px rgba(141, 141, 141, 0.2);
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

const Nav = styled.nav`
  margin-right: auto;
  position: absolute;
  top: 80px;
  left: 0;
  width: calc(100% - 40px);
  padding: 0 20px;
  backdrop-filter: blur(10px);
  transition: 0.3s;
  overflow: hidden;

  ${({ isOpen }) => (isOpen ? "height: calc(100% - 80px);" : "height: 0;")};

  @media (min-width: 768px) {
    width: auto;
    height: auto;
    position: relative;
    top: 0;
    padding: 0;
    display: flex;
  }
`;

const Ul = styled.ul`
  list-style-type: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Li = styled.li`
  margin-right: 100px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  font-weight: 700;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
  }
  &.active {
    color: #9381ff;
  }
`;

const CartLink = styled(Link)`
  position: absolute;
  right: 20px;
  bottom: 70px;
  user-select: none;

  @media (min-width: 768px) {
    position: relative;
    right: 0;
    bottom: 0;
  }
`;

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Header>
      <MenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <Nav isOpen={isOpen}>
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
      <CartLink to="/cart">
        <CartIcon />
      </CartLink>
    </Header>
  );
}
