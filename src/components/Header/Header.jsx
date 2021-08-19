/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import Hamburger from '../UI/Hamburger/Hamburger';
import Logo from '../UI/Logo/Logo';
import Overlay from '../UI/Overlay/Overlay';

import classes from './Header.module.css';

export const Header = () => {
  const [toggleIsActive, setToggleIsActive] = useState(false);

  const toggleMenuHandler = () => {
    setToggleIsActive((prevState) => !prevState);
  };
  return (
    <header className={classes.header}>
      <nav>
        <div
          className={`flex flex-jc-sb flex-ai-c container container-paround ${classes.navbar}`}
        >
          <Logo />

          <Hamburger
            className={`${classes['hide-for-desktop']}`}
            onToggle={toggleMenuHandler}
            toggleIsActive={toggleIsActive}
          />

          <div className={`${classes.links} ${classes['hide-for-mobile']}`}>
            <a href='#' className={classes.link}>
              Home
            </a>
            <a href='#' className={classes.link}>
              About
            </a>
            <a href='#' className={classes.link}>
              Contact
            </a>
            <a href='#' className={classes.link}>
              Blog
            </a>
            <a href='#' className={classes.link}>
              Careers
            </a>
          </div>

          <Button className={classes['hide-for-mobile']}>Request Invite</Button>
        </div>
      </nav>
      {toggleIsActive && <Overlay toggleIsActive={toggleIsActive} />}
    </header>
  );
};
