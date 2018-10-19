import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
`;

const StyledImage = styled.img`
  display: block;
`;

export const Logo = props => {
  return (
    <StyledLogo>
      <StyledImage src={props.logoSrc} />
    </StyledLogo>
  );
};
