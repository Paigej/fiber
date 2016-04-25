import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path, Circle, CircleMarker } from 'react-leaflet'
import { NEARBY_METERS } from '../constants'

export default class SelectedPosition2 extends Component {

  render(){
    const { map, selectedPosition, selectedPosition2 } = this.props

    if (selectedPosition2){

      console.log("here")
      // TODO: create a <Circle/> using NEARBY_METERS as the radius
      const nearbyCircle2 = <Circle center={selectedPosition2} map={map} radius={NEARBY_METERS}/>
      const marker2 = <CircleMarker center={selectedPosition2} map={map} radius={10}/>
      // Q: What's the difference beteween CircleMarker and Circle

      return <div>
        { nearbyCircle2 }
        { marker2 }
      </div>
    } else {
      return null
    }
  }
}