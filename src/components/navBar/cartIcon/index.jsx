import React from "react";
import { ReactComponent as ShoppingCart } from "./assets/shopping-cart.svg";
import styled from "styled-components";

const ShoppingCartContainer = styled.div`
  position: relative;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #50514f;
  position: absolute;
  bottom: 5px;
  left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: #ffffff;
`

export default function CartIcon(props) {
  return (
    <ShoppingCartContainer>
      <ShoppingCart />
      <Circle>
        <Span>{props.count || 0}</Span>
      </Circle>
    </ShoppingCartContainer>
  );
}
