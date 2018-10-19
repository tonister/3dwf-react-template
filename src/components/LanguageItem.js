import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLanguageMenuItem = styled.option`
  display: flex;
  position: relative;
`;

const LanguageItem = ({ languageKey, languageName }) => {
  return <StyledLanguageMenuItem value={languageKey}>{languageName}</StyledLanguageMenuItem>;
};

LanguageItem.propTypes = {
  languageKey: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired
}

export default Languagetem;
