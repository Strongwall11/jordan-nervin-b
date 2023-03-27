import React, { Component } from 'react';
import {FaPython, FaReact, FaAws, FaBitcoin, FaEthereum, FaRust, FaWordpress, FaVuejs, FaDocker} from 'react-icons/fa';
import {SiExpress, SiCplusplus, SiSolidity, SiNextdotjs, SiMui, SiWeb3Dotjs, SiMysql, SiFirebase, SiMacos} from 'react-icons/si';
import {DiNodejs, DiJavascript, DiDjango, DiMongodb} from 'react-icons/di';
import {FcLinux} from 'react-icons/fc';
import {AiOutlineAntDesign} from 'react-icons/ai';

class Resume extends Component {
   render() {
      if (this.props.data) {
         var skillmessage = this.props.data.skillmessage;
         var school = this.props.data.education.school;
         var degree = this.props.data.education.degree;
         var graduated = this.props.data.education.graduated;
         var description = this.props.data.education.description;
         var study = this.props.data.education.study.map(function (study) {
            return <div>
               {study.study}
            </div>
         })
         var work = this.props.data.work.map(function (work) {
            return <div key={work.title}><h3>{work.title}</h3>
               <p className="info">{work.company}<span>&bull;</span> <em className="date">{work.years}</em></p>
               <div>{work.description1}</div>
               <div>{work.description2}</div>
               <div>{work.description3}</div>
               <div>{work.description4}</div>
               <div>{work.description5}</div>
               <div>{work.description6}</div>
               <br />
            </div>
         })
         var skills = this.props.data.skills.map(function (skills) {
            var className = 'bar-expand ' + skills.name.toLowerCase();
            return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
         })
      }

      return (
         <section id="resume">
            <div className="row education">
               <div className="three columns header-col">
                  <h1><span>Education</span></h1>
               </div>

               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        <h3>{school}</h3>
                        <p className="info">{degree} <span>&bull;</span><em className="date">{graduated}</em></p>
                        <p>{description}</p>
                        <br />
                        <p>{study}</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="row work">
               <div className="three columns header-col">
                  <h1><span>Work</span></h1>
               </div>

               <div className="nine columns main-col">
                  {work}
               </div>
            </div>
            <div className="row skill">
               <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
               </div>
               <div className='nine columns header-col'>
               <p>
                  {skillmessage}
               </p>
                  <div className="bgrid-sixths s-bgrid-quarters cf ">
                     <DiNodejs className='columns skill-item'/>
                     <DiJavascript className='columns skill-item'/>
                     <FaPython className='columns skill-item'/>
                     <FaReact className='columns skill-item'/>
                     <FaAws className='columns skill-item'/>
                     <SiExpress className='columns skill-item'/>
                     <DiDjango className='columns skill-item'/>
                     <FaBitcoin className='columns skill-item'/>
                     <FaEthereum className='columns skill-item'/>
                     <SiCplusplus className='columns skill-item'/>
                     <SiSolidity className='columns skill-item'/>
                     <FaRust className='columns skill-item'/>
                     <FaWordpress className='columns skill-item'/>
                     <FaVuejs className='columns skill-item'/>
                     <SiNextdotjs className='columns skill-item'/>
                     <SiMui className='columns skill-item'/>
                     <AiOutlineAntDesign className='columns skill-item'/>
                     <SiWeb3Dotjs className='columns skill-item'/>
                     <DiMongodb className='columns skill-item'/>
                     <SiMysql className='columns skill-item'/>
                     <SiFirebase className='columns skill-item'/>
                     <FaDocker className='columns skill-item'/>
                     <FcLinux className='columns skill-item'/>
                     <SiMacos className='columns skill-item'/>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Resume;
