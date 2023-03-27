import React, { Component } from 'react';
import { FaTelegram, FaSkype, FaDiscord, FaEnvelope, FaLinkedin, FaLink } from "react-icons/fa";

class Footer extends Component {
  render() {

    if(this.props.data){
      const networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
           <li className="network.social">
              <a
                href="https://t.me/StrongWall11"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
              </li>
              <li className="social-icons">
              <a
                href="https://join.skype.com/invite/ykeXwEJFz2AR"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaSkype />
              </a>
              </li>
              <li className="social-icons">
              <a
                href="https://discord.com/ElevenApple#3617
                "
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
              </li>
              <li className="social-icons">
              <a
                href="mailto:jordannervin.ele@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
              <li className="social-icons">
              <a
                href="https://linkedin.com/in/jordannervin-talent"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2023 Jordan Nervin</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/" target="_blank">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
