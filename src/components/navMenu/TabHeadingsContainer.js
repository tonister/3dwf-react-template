import React from "react";
import styled from "styled-components";
import { TabHeadComponent } from "./TabHeadComponent";

const StyledTabHeadsContainer = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
  height: 10%;
`;

export const TabHeadsContainer = props => {
  return (
    <StyledTabHeadsContainer>
      <TabHeadComponent title={props.wayfinder.translator.get("az")} />
      <TabHeadComponent title={props.wayfinder.translator.get("topics")} />
      <TabHeadComponent title={props.wayfinder.translator.get("floors")} />
    </StyledTabHeadsContainer>
  );
};
