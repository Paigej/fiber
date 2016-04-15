import React, {Component, PropTypes} from 'react'

import _ from 'lodash'

// React component for visualizing fiber locations on a map
export default class FiberCostTable extends Component {

  render(){
    const { fibers } = this.props
    const rowHeaders = <div className="row" style={{marginBottom:0}}>
        <div className="col s2"> Id </div>
        <div className="col s5"> Cost ($) </div>
        <div className="col s5"> Distance (m) </div>
      </div>

    const rowElements = _.map(fibers, (fiber, i) => {

      //const className = !fiber.isSelected ? 'row' : 'row orange'
      if(fiber.isSelected){
      return <div key={i} className='row white' style={{marginBottom:0}}>
        <div className="col s2"> {i} </div>
        <div className="col s5"> {fiber.cost.toFixed(0)} </div>
        <div className="col s5"> {fiber.distance} </div>
      </div>

    }
  })

    return <div>
      { rowHeaders }
      { rowElements }
    </div>

  }

}