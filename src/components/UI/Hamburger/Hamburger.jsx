import React from 'react';

import classes from './Hamburger.module.css';
const Hamburger = (props) => {
  return (
    <div
      className={`${classes.hamburger} ${
        props.toggleIsActive && classes.open
      } ${props.className}`}
      onClick={props.onToggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
