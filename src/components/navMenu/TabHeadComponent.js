import React from "react";
import styled from "styled-components";

const StyledTabHeadComponent = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background: aliceblue;'
  height: 100%;
`;

export const TabHeadComponent = props => {
  return (
    <StyledTabHeadComponent>
      <a href="">{props.title}</a>
    </StyledTabHeadComponent>
  );
};
