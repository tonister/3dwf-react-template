import React from "react";
import styled from "styled-components";

import { TabsComponent } from "../components/Tabs";

const StyledNavMenu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 50%;
  background: rebeccapurple;
`;

export const NavMenuComponent = props => {
  return (
    <StyledNavMenu className="nav-menu">
      <TabsComponent wayfinder={props.wayfinder} />
    </StyledNavMenu>
  );
};
