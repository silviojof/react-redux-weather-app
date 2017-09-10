import React, { Component } from 'react';

const google = window.google;
const mapStyle = {
    width: 200,
    height: 225
  };

class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    console.log(this);
  }

  render() {
    return <div ref="map" style={mapStyle}/>
  }
}

export default GoogleMap;
