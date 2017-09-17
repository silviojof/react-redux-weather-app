import React, {Component} from "react"
import {Map, GoogleApiWrapper} from 'google-maps-react'

const GOOGLE_MAPS_API_KEY = "AIzaSyCqTpVjBaiaJf7OGbEdLWlKcQUq3HwTlTw" // Change your api key

const style = {
  width: '250px',
  height: '250px'
}

export class MyComponent extends Component {

render() {

    return (
      <Map google={this.props.google}
        zoom={14}
        initialCenter={{
            lat: this.props.lat,
            lng: this.props.lon
          }}
        style={style} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY,
})(MyComponent);
