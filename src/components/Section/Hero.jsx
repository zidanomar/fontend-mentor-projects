import React from 'react';
import Button from '../UI/Button/Button';

import classes from './Hero.module.css';
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={`container ${classes.hero__container}`}>
        <div className={classes.hero__image}></div>
        <div className={`container-paround ${classes.hero__text}`}>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button className={classes.hero__button}>Request Invite</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
