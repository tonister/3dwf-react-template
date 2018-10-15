import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LanguageItem from "./LanguageItem";

const StyledLanguageMenu = styled.select`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LanguageList = ({ items, setLanguage }) => {
    <StyledLanguageMenu onChange={setLanguage}>
        {items.map((language) => {
            console.log("DEBUG:: languages key:", language, items);
            return (
                <LanguageItem
                    key={items.languages[language].id}
                    languageKey={language}
                    languageName={items.languages[language].nativeName}
                />
            );
        })}
    </StyledLanguageMenu>
};

LanguageList.PropTypes = {
    languages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            nativeName: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    setLanguage: PropTypes.func.isRequired
};

export default LanguageList;