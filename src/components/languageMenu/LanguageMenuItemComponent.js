import React from "react";
import styled from "styled-components";

const StyledLanguageMenuItem = styled.option`
  display: flex;
  position: relative;
`;

export const LanguageMenuItem = props => {
  return <StyledLanguageMenuItem>{props.languageName}</StyledLanguageMenuItem>;
};
