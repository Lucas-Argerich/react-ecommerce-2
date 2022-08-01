import React from "react";
import styled from "styled-components";

const MenuButtonWrapper = styled.div`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuLine = styled.div`
  width: 34px;
  height: 4px;
  background-color: #50514f;
  margin: 6px 0;
  transition: 0.3s;
  transform-origin: left;

  ${({ isOpen, line }) =>
    isOpen &&
    `
    margin: 8px 0;
    background-color: ${line === 2 && "transparent"};
    transform: ${
      (line === 1 && "rotate(45deg)") || (line === 3 && "rotate(-45deg)")
    };
  `}
`;

export default function MenuButton(props) {
  return (
    <MenuButtonWrapper onClick={props.onClick}>
      <MenuLine isOpen={props.isOpen} line={1} />
      <MenuLine isOpen={props.isOpen} line={2} />
      <MenuLine isOpen={props.isOpen} line={3} />
    </MenuButtonWrapper>
  );
}
