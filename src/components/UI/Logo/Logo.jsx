import React from 'react';

import classes from './Logo.module.css';
import logo from '../../../images/logo.svg';
import logoDark from '../../../images/logo-dark.svg';

const Logo = (props) => {
  return (
    <a href='/' className={classes.logo}>
      <img src={props.dark ? logoDark : logo} alt='easybank' />
    </a>
  );
};

export default Logo;
