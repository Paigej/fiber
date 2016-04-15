import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class Footer extends Component {
  render(){
      return (
        <footer className="page-footer orange darken-2">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">    </h5>
                <h2 className="grey-text text-lighten-4">Zayo Pricing App</h2>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Team:</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/Paigej">Paige Johnson</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/sigrunnsky">Sigrunn Sky</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/clfchris">Christopher Fanning</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/Huriphoonado">Willie Payne</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/aokeson">Alex Okeson</a></li>
                </ul>
              </div>
            </div>
          </div>
        <div className="footer-copyright">
          <div className="container">© Copyright, Zayo 2016</div>
        </div>
      </footer>
      );
    }
}
