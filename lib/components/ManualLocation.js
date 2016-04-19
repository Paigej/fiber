import React, {Component, PropTypes} from 'react'

import _ from 'lodash'

export default class ManualLocation extends Component {
  render(){
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate"/>
              <label for="last_name">Last Name</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
