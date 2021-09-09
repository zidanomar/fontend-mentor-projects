import React from 'react';

import classes from './IconLink.module.css';
const IconLink = (props) => {
  return <div className={classes.icon}>{props.children}</div>;
};

export default IconLink;
