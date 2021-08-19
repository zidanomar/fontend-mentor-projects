import React from 'react';

import classes from './IconLink.module.css';
const IconLink = (props) => {
  return (
    <div className={classes.icon}>
      {props.children}
      {/* <img src={props.icon} alt={props.name} /> */}
    </div>
  );
};

export default IconLink;
