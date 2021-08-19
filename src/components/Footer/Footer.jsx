/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import IconLink from '../UI/IconLink/IconLink';
import Logo from '../UI/Logo/Logo';
import Button from '../UI/Button/Button';
import classes from './Footer.module.css';

import { icons } from './FooterHelper';
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes.footer__grid}`}>
        <div className={classes.footer__brand}>
          <Logo dark={true} />
        </div>
        <div className={classes.footer__social}>
          {icons.map((icon, index) => (
            <IconLink key={index} name={icon.name}>
              {icon.icon}
            </IconLink>
          ))}
        </div>
        <div
          className={`${classes.footer__link} ${classes['footer__link-col1']}`}
        >
          <a href='#'>About Us</a>
          <a href='#'>Contact</a>
          <a href='#'>Blog</a>
        </div>
        <div
          className={`${classes.footer__link} ${classes['footer__link-col2']}`}
        >
          <a href='#'>Careers</a>
          <a href='#'>Spport</a>
          <a href='#'>Privacy Policy</a>
        </div>
        <div className={classes.footer__cta}>
          <Button className={classes.footer__cta_btn}>Request Invite</Button>
        </div>
        <div className={classes.footer__copyright}>
          <div className={classes.footer__copyright_text}>
            © Easybank. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
