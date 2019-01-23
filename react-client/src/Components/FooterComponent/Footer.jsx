import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="contact">
        <div id="contactLinks">
          <a href="https://www.linkedin.com/in/matthew-smidt/" target="_blank">
            <i class="linkedin alternate square icon contactIcons"></i>
          </a>
          <a href="mailto:smidtm@myumanitoba.ca" data-inverted="" data-tooltip="smidtm@myumanitoba.ca" data-position="top left">
            <i class="mail outline icon"></i>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;
