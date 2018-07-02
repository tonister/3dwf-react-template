import React from "react";
import styled from "styled-components";
import { LanguageMenuItem } from "./LanguageMenuItemComponent";

const StyledLanguageMenu = styled.select`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LanguageMenu = props => {
  return (
    <StyledLanguageMenu>
      {Object.keys(props.languages).map((key, value) => {
        console.log("DEBUG:: languages key:", key, props.languages);
        return (
          <LanguageMenuItem
            key={props.languages[key].id}
            languageName={props.languages[key].nativeName}
          />
        );
      })}
    </StyledLanguageMenu>
  );
};
