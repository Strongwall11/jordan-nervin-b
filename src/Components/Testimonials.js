import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.name}>
            <blockquote>
               <p style={{"color": "#33ff33"}}><i className="icon fa fa-certificate" style={{"margin-right": "7px"}}></i>{testimonials.name} <em>{testimonials.date}</em></p>
               <div style={{"color": "white"}}>{testimonials.description_1}</div>
               <div style={{"color": "white"}}>{testimonials.description_2}</div>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">
            <div className="twelve columns flex-container">
                  <ul>
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;
