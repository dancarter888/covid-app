import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log(this.props.countries);
    return (
      <Map google={this.props.google}
        style={{width: '100%%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={2.5}
        initialCenter={
          {
            lat: -22.7359,
            lng: 140.0188
          }
        }
        >

        {this.props.countries.map((country) => {
          return (
            <Marker
              onClick={this.onMarkerClick}
              name={country.name + ": " + country.confirmed.toLocaleString()}
              position = {{lat: country.lat, lng: country.long}}
              />
          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>

</Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDUm78pqz8mpAKvF9hoU3ZwJ7dF0ePMdFM'
})(MapContainer);