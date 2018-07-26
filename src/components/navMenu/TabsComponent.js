import React from "react";
import styled from "styled-components";

import { TabHeadsContainer } from "./TabHeadingsContainer";
import { TabContentsContainer } from "./tabContentsContainer";

const StyledTabsComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: navy;
`;

export const TabsComponent = props => {
  return (
    <StyledTabsComponent>
      <TabHeadsContainer wayfinder={props.wayfinder} />
      <TabContentsContainer wayfinder={props.wayfinder} />
    </StyledTabsComponent>
  );
};
