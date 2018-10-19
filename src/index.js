import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import styled from "styled-components";
//import { createStore } from "redux";
//import { ACTIONS, CREATORS } from "./actions";
//import wfStates from "./reducers";
import { WfService } from "./components/api/wfServiceComponent";

//const store = createStore(wfStates);

//console.log("DEBUG::store", store.getState());

//const unsubscribe = store.subscribe(() => console.log(store.getState()));

//store.dispatch(CREATORS.setLanguage(1));

console.log("dummy");

//unsubscribe();
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

// const AppContainer = ({ className, children }) => {
//   return <div className={className}>{children}</div>;
// };

// const StyledAppContainer = styled(AppContainer)`
//   position: relative;
//   height: 100%;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;

const App = () => {
  return (
    <StyledAppContainer>
      <WfService />
    </StyledAppContainer>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
