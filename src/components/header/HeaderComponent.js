import React from "react";
import styled from "styled-components";
import { Title } from "./TitleComponent";
import { LanguageMenu } from "../languageMenu/LanguageMenuComponent";

const StyledHeaderComponent = styled.section`
  display: flex;
  position: relative;
  height: 10%;
  width: 100%;
  background: pink;
  align-items: center;
  padding: 5px;
  box-sizing: inherit;
  justify-content: space-between;
`;

export const HeaderComponent = props => {
  return (
    <StyledHeaderComponent>
      <Title buildingName={props.title} />
      <LanguageMenu languages={props.languages} />
    </StyledHeaderComponent>
  );
};
