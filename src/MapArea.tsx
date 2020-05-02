import React from 'react'
import { Map, TileLayer, Circle } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'

interface AreaProps {
  center: [number, number] | null
}

const Area: React.FunctionComponent<AreaProps> =
  ({ center }) => center ?
    <Circle center={center} radius={1000} /> :
    null;

interface MapAreaProps {
  onClick: (e: LeafletMouseEvent) => void
  mapCenter: [number, number]
  homeCoordinates: [number, number] | null
}

const MapArea: React.FunctionComponent<MapAreaProps> = ({ onClick, mapCenter, homeCoordinates }) => (
  <div id="mapArea">
    <Map onclick={onClick} className="leafmap" center={mapCenter} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Area center={homeCoordinates} />
    </Map>
  </div>
)

export default MapArea
