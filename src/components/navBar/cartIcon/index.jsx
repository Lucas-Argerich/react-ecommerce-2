import React from "react";
import { ReactComponent as ShoppingCart } from "./assets/shopping-cart.svg";
import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9381ff;
  border-radius: 50%;

  @media (min-width: 768px) {
    background: transparent;
  }
`;

const StyledShoppingCart = styled(ShoppingCart)`
  fill: #ffffff;

  @media (min-width: 768px) {
    fill: #50514f;
  }
`

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
  position: absolute;
  bottom: 10px;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    background-color: #50514f;
  }
`;

const Span = styled.span`
  color: #9381ff;

  @media (min-width: 768px) {
    color: #ffffff;
  }
`;

export default function CartIcon(props) {
  return (
    <ShoppingCartContainer>
      <StyledShoppingCart />
      <Circle>
        <Span>{props.count || 0}</Span>
      </Circle>
    </ShoppingCartContainer>
  );
}
