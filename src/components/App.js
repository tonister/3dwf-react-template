import React from "react";
import styled from "styled-components";
import { WfService } from "../containers/WfService";

const StyledAppContainer = styled.div`
position: relative;
height: 100%;
width: 100%;
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;
background-color: red;
`;

const App = () => (
    <StyledAppContainer>
        <WfService />
    </StyledAppContainer>
);

export default App;
