import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const MarkerContainer = () => {
    return (
        <Marker
            name={'Dolores park'}
            position={{lat: 37.759703, lng: -122.428093}} />
    );

}

export default MarkerContainer;