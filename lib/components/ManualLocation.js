import React, {Component, PropTypes} from 'react'

import _ from 'lodash'

export default class ManualLocation extends Component {
  // style={marginTop:20}
  render(){
    return (
      <div className="row">
       <div className="row"> </div>
        <div className="card">
          <div className="card-content orange darken-2">
            <div className="card">
              <div className="card-content white">
                <div className="row">
                  <div className="col s12 offset-s2"><h5 className="black-text">Enter a Location</h5></div>
                    <div className="progress ">
                      <div className="determinate"></div>
                    </div>
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s5">
                        <input placeholder="Latitude" id="latitude" type="text" className="validate"/>
                      </div>
                      <div className="input-field col s5 offset-s1">
                        <input placeholder="Longitude" id="longitude" type="text" className="validate"/>
                     </div>
                    </div>
                  </form>
                    <div className="row">
                  <div className="card-action">
                    <a className="waves-effect waves-light btn orange darken-3 col s4 offset-s4" onClick={this.props.setSelectedPositionManual}>Submit</a>
                  </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
