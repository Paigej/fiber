import React, {Component, PropTypes} from 'react'
import _ from 'lodash'

export default class Footer extends Component {
  render(){
      return (
        <footer className="page-footer orange darken-2">

            <div className="row">
              <div className="col s7 offset-s1">
                <h4 className="white-text col s6 offset-s4">Zayo Fiber Pricing App</h4>
                <a className="col s12 waves-effect waves-light btn-large orange darken-3 z-depth-2" href="http://www.zayo.com/services/">What We Do</a>
                <a className="col s12 waves-effect waves-light btn-large orange darken-3 z-depth-2" href="http://www.zayo.com/company/about-zayo/">Who We Are</a>
                <a className="col s12 waves-effect waves-light btn-large orange darken-3 z-depth-2" href="http://www.zayo.com/newsroom/">Newsroom</a>

              </div>
              <div className="col s3 offset-s1">
                <h5 className="white-text">Team:</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3 hoverable" href="https://github.com/Paigej">Paige Johnson</a></li>
                  <li><a className="grey-text text-lighten-3 hoverable" href="https://github.com/sigrunnsky">Sigrunn Sky</a></li>
                  <li><a className="grey-text text-lighten-3 hoverable" href="https://github.com/clfchris">Christopher Fanning</a></li>
                  <li><a className="grey-text text-lighten-3 hoverable" href="https://github.com/Huriphoonado">Willie Payne</a></li>
                  <li><a className="grey-text text-lighten-3 hoverable" href="https://github.com/aokeson">Alex Okeson</a></li>
                </ul>
              </div>
            </div>

          <div className="footer-copyright">
            <div className="container">
              <div className= "col s6">
              <div className="footer-socials-item twitter"><a href="https://twitter.com/@ZayoGroup" target="_blank" title="twitter" rel="nofollow">twitter</a></div>
              <div className="footer-socials-item facebook"><a href="https://www.facebook.com/zayogroup" target="_blank" title="facebook" rel="nofollow">facebook</a></div>
              <div className="footer-socials-item linkedin"><a href="https://www.linkedin.com/company/zayo-group" target="_blank" title="linkedin" rel="nofollow">linkedin</a></div>
              <div className="footer-socials-item instagram"><a href="https://instagram.com/lifeatzayo/" target="_blank" title="instagram" rel="nofollow">instagram</a></div>
              <div className="footer-socials-item glassdoor"><a href="http://www.glassdoor.com/Overview/Working-at-Zayo-EI_IE235326.11,15.htm" target="_blank" title="Glassdoor">Glassdoor</a></div>
              © Copyright, Zayo Group, LLC 2016
              </div>
            </div>
          </div>

          </footer>
      );
    }
}
