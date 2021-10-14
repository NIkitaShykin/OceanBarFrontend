import {
  Map,
  Marker,
  GoogleApiWrapper,
  IProvidedProps,
  GoogleAPI
} from 'google-maps-react'
import React from 'react'

interface ICustomMapProps extends IProvidedProps {
  google: GoogleAPI
  loaded?: boolean
  lat: number
  lng: number
  width: string
  height: string
};

export const CustomMap: React.FunctionComponent<ICustomMapProps> =
({google, lat, lng, width, height}) => {
  return (
    <Map
      google={google}
      style={{
        width: width,
        height: height
      }}
      initialCenter={{
        lat: lat,
        lng: lng
      }}>
      <Marker />
    </Map>
  )
}

// eslint-disable-next-line new-cap
export default GoogleApiWrapper({
  apiKey: ('AIzaSyC3VTk40g8Zdk2z0PDP_q4TiVGKjMzJGUw')
})(CustomMap)
