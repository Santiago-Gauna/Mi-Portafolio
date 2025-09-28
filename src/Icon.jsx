import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import classes from './Icon.module.css';

const Icons = () => {
  return (
    <div className={classes.socialicons}>
      <a href="https://github.com/Santiago-Gauna" target="_blank" rel="noopener noreferrer">
        <FaGithub className={classes.icon} />
      </a>
      <a href="https://instagram.com/santiago.g34" target="_blank" rel="noopener noreferrer">
        <FaInstagram className={classes.icon}  />
      </a>
      <a href="https://www.linkedin.com/in/santiago-gauna-60662b265/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className={classes.icon}  />
      </a>
    </div>
  );
};

export default Icons;