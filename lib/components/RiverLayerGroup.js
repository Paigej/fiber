import React, {Component, PropTypes} from 'react'
import { Map, Marker, Popup, TileLayer, Polyline, LayerGroup, Path } from 'react-leaflet'
import _ from 'lodash'

import RiverGeometry from './RiverGeometry'
import RiverCenter from './RiverCenter'

export default class RiverLayerGroup extends Component {

  render(){

    // Q: How does each property get provided?
    const { map, rivers, selectedPosition } = this.props

    const geometryElements = _.map(rivers, (river,i) => {


      var color = 'blue'

      return <RiverGeometry geometry={river.geometry} selectedPosition={selectedPosition} key={i} map={map} color={color}/>
      // Q: Why do we have to specify map={map}?
      // Q: Why do we have to specify key={i}?
    })

    const centerElements = _.map(rivers, (river,i) => {

      return <RiverCenter center={river.center} key={i} map={map}/>
      // Q: Why do we have to specify map={map}?
      // Q: Why do we have to specify key={i}?
    })

    return <LayerGroup map={map}>
      { geometryElements }
    </LayerGroup>
  }

}