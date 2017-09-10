import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>; //Still confused in this part

export default (props) => {

  const defaultProps = {
    center: {
      lat: props.lat,
      lng: props.lon
    },
    zoom: 12
  };
    return(
      <GoogleMapReact
        defaultCenter = { defaultProps.center }
        defaultZoom = { defaultProps.zoom }
      >
        <AnyReactComponent
          lat={ props.lat }
          lng={ props.lon }
          text={ props.text }
        />
      </GoogleMapReact>
    );
}
