import React from "react";
import styled from "styled-components";

const StyledMapContainer = styled.div`
  position: relative;
  height: 90%;
  width: 50%;
  display: flex;
`;

export class MapComponent extends React.Component {
  componentWillMount = (nextProp, nextState) => {
    console.log("DEBUG:: mapComponent.willMount", nextProp, nextState);
    this.props.wayfinder.open();
  };
  render() {
    return (
      <StyledMapContainer>
        <canvas id="map" />
      </StyledMapContainer>
    );
  }
}
