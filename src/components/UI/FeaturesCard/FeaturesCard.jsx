import React from 'react';

import classes from './FeaturesCard.module.css';
const FeaturesCard = (props) => {
  return (
    <div className={classes.feature__item}>
      <div className={classes.feature__icon}>
        <img src={props.image} alt={props.tite} />
      </div>
      <div className={classes.featrue__title}>{props.title}</div>
      <div className={classes.feature__description}>{props.description}</div>
    </div>
  );
};

export default FeaturesCard;
