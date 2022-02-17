import React from 'react'
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

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
  width: '60%',
  height: '100%',
  marginLeft: "0"
};
const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
}


const onLoad = (circle: any) => {
  console.log('Circle onLoad circle: ', circle)
}

const onUnmount = (circle: any) => {
  console.log('Circle onUnmount circle: ', circle)
}
const center:MapPosition =  {
  lat: 52,
  lng: 19
};

function MyComponent({location}: any) {
  console.log(location)
  return (
    <LoadScript 
      googleMapsApiKey="AIzaSyBnF5F0LROVdsNUomrTFwx8BqoDtmCmFZo"
    >

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
      >
       <Circle 
          radius={2}
          // required
          center={center}
          // required
          options={options}
    />

      </GoogleMap>
    </LoadScript>

  )
}

export default React.memo(MyComponent)