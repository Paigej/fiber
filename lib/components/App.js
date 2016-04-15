import React, {Component, PropTypes} from 'react'

import FiberMap from './FiberMap'
import FiberCostTable from './FiberCostTable'
import Navbar from './Navbar'
import Footer from './Footer'

export default class App extends Component {

  render(){
    const { fibers } = this.props
    return(
    <div>
        <Navbar {...this.props}/>
        <div className="row">
        <div className="col s8">
          <FiberMap {...this.props}/>
        </div>
        <div className="col s4">
          <FiberCostTable {...this.props}/>
        </div>
      </div>
      <Footer {...this.props}/>
    </div>
      );
  }
}
