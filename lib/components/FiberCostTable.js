import React, {Component, PropTypes} from 'react'

import _ from 'lodash'

// React component for visualizing fiber locations on a map
export default class FiberCostTable extends Component {

  render(){
    var headerStyle = {fontWeight: 'bold', textAlign: 'center', marginBottom:0, fontFamily: 'Arial Black', fontSize: '16', fontStyle: 'Italic' };
    var elementStyle = {marginLeft: 1, marginRight: 1, textAlign: 'center', marginBottom:0}
    //const { rivers } = this.props
    const { fibers } = this.props
    const rowHeaders = <div className="row" style={headerStyle}>
        <div className="col s2"> Id </div>
        <div className="col s5"> Cost ($) </div>
        <div className="col s5"> Distance (m) </div>
      </div>

    const rowElements = _.map(fibers, (fiber, i) => {

      if(fiber.isSelected){
      return <div key={i} className='row card white' style={elementStyle}>
        <div className="col s2 black-text"> {i} </div>
        <div className="col s5 black-text"> ${fiber.cost.toFixed(0)} </div>
        <div className="col s5 black-text"> {fiber.distance} </div>
      </div>

    }
  })

    return <div className="row">
      <div className="card orange darken-2">
        <div className="card-content white-text">
          { rowHeaders }
          { rowElements }
        </div>
      </div>
    </div>

  }

}
