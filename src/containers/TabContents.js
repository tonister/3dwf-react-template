import React from "react";
import styled from "styled-components";

const StyledTabContentsContainer = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
`;

export class TabContentsContainer extends React.Component {
  render() {
    return (
      <StyledTabContentsContainer>
        <div />
      </StyledTabContentsContainer>
    );
  }
}
