import React from "react";
import styled from "styled-components";

import { MapComponent } from "../map/MapComponent";
import { HeaderComponent } from "../header/HeaderComponent";

declare var Wayfinder3D;
declare var WayfinderAPI;

const StyledWayfinderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
`;

export class WfService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wayfinder: new Wayfinder3D(),
      dataLoaded: false
    };

    var wayfinder = this.state.wayfinder;
    WayfinderAPI.LOCATION = "//api.3dwayfinder.com/";
    wayfinder.options.assetsLocation = "//static.3dwayfinder.com/shared/";
    this.cbOnMapReady = this.cbOnMapReady.bind(this);
    wayfinder.cbOnMapReady = this.cbOnMapReady;
  }
  cbOnMapReady() {
    console.log("DEBUG:: wayfinder", this.state.wayfinder);
    this.setState({ dataLoaded: true });
  }
  render() {
    return (
      <StyledWayfinderContainer>
        <HeaderComponent
          title={
            this.state.dataLoaded ? this.state.wayfinder.building.name : ""
          }
          languages={
            this.state.dataLoaded ? this.state.wayfinder.languages : ""
          }
        />
        <MapComponent wayfinder={this.state.wayfinder} />
      </StyledWayfinderContainer>
    );
  }
}
