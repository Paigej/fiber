import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class Navbar extends Component {
  render(){
      return (
        <nav className="navbar-fixed-top">
          <div className="nav-wrapper orange darken-2">
            <div className="container">
              <a href="#" className="brand-logo center white-text">Zayo Fiber Pricing</a>
            </div>
          </div>
        </nav>
      );
    }
}
