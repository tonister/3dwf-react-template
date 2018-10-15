import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  display: block;
  position: relative;
`;

export const Title = props => {
  return <StyledTitle>{props.buildingName}</StyledTitle>;
};
