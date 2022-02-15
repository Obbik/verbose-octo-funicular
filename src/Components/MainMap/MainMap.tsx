import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

interface MapStyle  {
    width: string;
    height: string;
    marginLeft: string
}

interface MapPosition { 
    lat: number
    lng: number
}

const containerStyle:MapStyle = {
  width: '80%',
  height: '100%',
  marginLeft: "0"
};

const center:MapPosition =  {
  lat: 52,
  lng: 19
};

function MyComponent({location}: any) {
  console.log(location, "1")
  return (
    <LoadScript 
      googleMapsApiKey="AIzaSyBnF5F0LROVdsNUomrTFwx8BqoDtmCmFZo"
    >

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7}
      >

      </GoogleMap>
    </LoadScript>

  )
}

export default React.memo(MyComponent)