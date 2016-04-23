import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class Navbar extends Component {
  render(){
      return (
        <nav className="navbar-fixed-top">
          <div className="nav-wrapper orange darken-2">
              <h5 href="#" className="brand-logo center white-text">Zayo Fiber Pricing</h5>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
  								<li><a href="http://www.zayo.com">Home</a></li>
  								<li><a href="http://www.zayo.com/legal">Legal</a></li>
  								<li><a href="http://www.zayo.com/policies/">Policies</a></li>
  								<li><a href="http://www.zayo.com/contact/sales/">Contact</a></li>
  							</ul>
          </div>
        </nav>
      );
    }
}
