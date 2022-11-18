import React, { Component } from 'react';
import Type from "./HeaderType";
import { FaTelegram, FaSkype, FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa";

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target='_blank'><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav"><h4>
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	          <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li></h4>
         </ul>

      </nav>
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline"><i>{name}</i></h1>
            <div className='typing-effect'>
                <Type />
            </div>
            <ul className="social">
            <li className="social-icons">
              <a
                href="https://t.me/StrongWall11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
              </li>
              <li className="social-icons">
              <a
                href="https://join.skype.com/invite/ykeXwEJFz2AR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSkype />
              </a>
              </li>
              <li className="social-icons">
              <a
                href="https://discord.com/ElevenApple#3617"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
              </li>
              <li className="social-icons">
              <a
                href="strongwall11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
              <li className="social-icons">
              <a
                href="https://github.com/kryptify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
