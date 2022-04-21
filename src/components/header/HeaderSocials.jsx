import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiUpwork} from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='__blank'><BsLinkedin/></a>
        <a href='https://github.com' target='__blank'><FaGithub/></a>
        <a href='https://upwork.com' target='__blank'><SiUpwork/></a>
    </div>
  );
}

export default HeaderSocials;
