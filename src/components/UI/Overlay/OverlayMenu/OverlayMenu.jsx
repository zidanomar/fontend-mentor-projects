import React from 'react';

import classes from './OverlayMenu.module.css';
const OverlayMenu = () => {
  return (
    <ul className={classes['menu-container']}>
      <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/'>About</a>
      </li>
      <li>
        <a href='/'>Contact</a>
      </li>
      <li>
        <a href='/'>Blog</a>
      </li>
      <li>
        <a href='/'>Careers</a>
      </li>
    </ul>
  );
};

export default OverlayMenu;
