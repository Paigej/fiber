import React, {Component, PropTypes} from 'react'

import _ from 'lodash'

export default class ManualLocation extends Component {
  render(){
    return (
      <div className="row">
        <div className="card"> 
          <div className="card-content">
            <div className="row">
              <div className="col s6"><h6>Enter a Location</h6></div>
              <div className="progress ">
                <div className="determinate"></div>
              </div>
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s6">
                    <input placeholder="Latitude" id="latitude" type="text" className="validate"/>
                  </div>
                  <div className="input-field col s6">
                    <input placeholder="Longitude" id="longitude" type="text" className="validate"/>
                 </div>
                </div>
              </form>
              <div className="card-action">
                <a className="waves-effect waves-light btn blue-grey" onClick={this.props.setSelectedPositionManual}>Submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
