import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { WfService } from "./components/api/wfServiceComponent";

import "./styles.css";

const StyledAppContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: block;
`;

function App() {
  return (
    <StyledAppContainer className="App">
      <WfService />
    </StyledAppContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
