import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path, CircleMarker } from 'react-leaflet'
import _ from 'lodash'
import 'leaflet-routing-machine'

export default class PathGeometry extends Component {

  render(){
    const color = 'red'

    const { map, center, selectedPosition } = this.props
    const centerLatlng = [center.latitude, center.longitude]
    const positionLatLng = [selectedPosition.latitude, selectedPosition.longitude]

    // Q: Why do we need to do this conversion from geometry.coordinates to latLngList
    /*const latLngList = _.map(geometry.coordinates, (coord,i) => {
      return [coord[1], coord[0]]
    })*/
    var newRoute = L.Routing.control({
      waypoints: [
        L.latLng(selectedPosition.latitude, selectedPosition.longitude),
        L.latLng(center.latitude, center.longitude)
      ]
    })
    newRoute.on("routesfound", function(e) {
      console.log(e)
    })
    newRoute.on("routingstart", function(e) {
      console.log('here')
      console.log(e)
    })
    newRoute.on("routingerror", function(e) {
      console.log(e)
    })

    var newCenter = <CircleMarker center={centerLatlng} map={map} color={color} radius={10}/>
    return newCenter

    // PolyLine
    // ref: http://leafletjs.com/reference.html#polyline
    //return <Polyline map={map} positions={latLngList} color={color}/>
  }

}
