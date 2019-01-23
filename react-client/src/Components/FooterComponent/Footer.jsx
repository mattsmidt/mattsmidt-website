import React, { Component } from 'react';
import react from '../../images/react.jpg';
import node from '../../images/node.jpg';

class Footer extends Component {
  render() {
    return (
      <footer id="tools">
        <h3 class="footer-title">Tools Used To Make This Website</h3>
        <div id="toolsIcons">
          <img class="toolsIcon" src={react} alt="React"/>
          <img class="toolsIcon" src={node} alt="Node.js"/>
        </div>
      </footer>
    )
  }
}

export default Footer;
