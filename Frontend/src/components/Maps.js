import React, { Component, Fragment } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

class Maps extends Component {
  state = {
    stores: [{ lat: 30.356674, lng: 76.36469 }],
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.lat,
            lng: store.lng
          }}
          name={"Thapar Institute of Engineering and Technology"}
          onClick={this.onMarkerClick}
        />
      );
    });
  };
  displayInfo = () => {
    return (
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
      >
        <div>
          <h5>{this.state.selectedPlace.name}</h5>
        </div>
      </InfoWindow>
    );
  };

  render() {
    const mapStyles = {
      width: "100%",
      height: "400px"
    };
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 30.356674, lng: 76.364787 }}
      >
        {this.displayMarkers()}
        {this.displayInfo()}
      </Map>
    );
  }
}
const GoogleAPI = process.env.GOOGLE_MAPS_API_KEY;
export default GoogleApiWrapper({
  apiKey: `${GoogleAPI}`
})(Maps);
