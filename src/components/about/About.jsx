import React from 'react';
import './about.css';
import ME from '../../assests/me-about.JPG'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
          An experienced, detailed-oriented, front-end web developer with two years
          of hands-on experience efficiently coding websites and applications using 
          modern HTML, CSS, Saas, JavaScript, React, Redux, Nextjs and Typescript. <br/>

          Building state-of-the-art, easy to use, user-friendly websites and applications
          is truly a passion of mine and in addition to my knowledge base, I actively seek out
          new technologies and stay up-to-date on industry trends and advancements. 
          This has allowed me to stay ahead of the curve and deliver exceptional work to all of my employers,
          including those I've worked for on a project basis.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
