import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio.map(function(bio) {
         return <div className='text-align'>{bio.bio}</div>
      });
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var telegram = this.props.data.telegram;
      var skype = this.props.data.skype;
      var resumeDownload = this.props.data.resumedownload;
      var website = this.props.data.website;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Jordan Nervin Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <div>{bio}</div>
            <br/>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span><i className="icon fa fa-road" style={{"margin-right": "7px"}}></i>Street : {street}</span><br />
						   <span><i className="icon fa fa-map-marker" style={{"margin-right": "7px"}}></i>Location : {city} {state} {zip}</span><br />
						   <span><i className="icon fa fa-phone" style={{"margin-right": "7px"}}></i>Phone Number : {phone}</span><br />
                     <span><i className="icon fa fa-envelope-o" style={{"margin-right": "7px"}}></i>Email : {email}</span><br/>
                     <span><i className="icon fa fa-location-arrow" style={{"margin-right": "7px"}}></i>Telegram link : {telegram}</span><br/>
                     <span><i className="icon fa fa-skype" style={{"margin-right": "7px"}}></i>Skype link : {skype}</span>
					   </p>
               </div>
            </div>
            <div className="download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
