import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "react-static-google-map";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 30.3564,
      lng: 76.3647
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCqe7cMg1l1HFoBUttsvlu4mXZtDIZV89w" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            location={{
              lat: this.props.center.lat,
              lng: this.props.center.lng
            }}
            color="blue"
            label="P"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
