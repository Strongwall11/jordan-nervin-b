import React, { Component } from 'react';
import { FaTelegram, FaSkype, FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa";

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
                href="https://discord.com/Shiny Comet#4705"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
              </li>
              <li className="social-icons">
              <a
                href="strongwall11@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
              <li className="social-icons">
              <a
                href="https://github.com/kryptify"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2022 Jordan Nervin</li>
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
