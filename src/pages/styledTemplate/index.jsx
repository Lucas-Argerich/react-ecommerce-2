import React from "react";
import styled from "styled-components";

const Main = styled.main`
  flex-grow: 1;
  margin: 0 20px;

  @media (min-width: 768px) {
    margin: 0 40px;
  }

  @media (min-width: 1024px) {
    margin: 0 80px;
  }

  @media (min-width: 1280px) {
    margin: 0 100px;
  }

  @media (min-width: 1600px) {
    margin: 0 120px;
  }

  @media (min-width: 1920px) {
    margin: 0 140px;
  }
`;

export default function StyledTemplate({ children }) {
  return <Main>{children}</Main>;
}
