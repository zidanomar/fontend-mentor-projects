import React from 'react';

import avatar from '../../images/image-jeremy.png';

import classes from './ProfileCard.module.css';

function ProfileCard(props) {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__detail}>
        <img src={avatar} alt='Jeremy Robson' />
        <div className={classes.detail__info}>
          <p>Report for</p>
          <div className={classes.username}>
            <h1>Jeremy</h1>
            <h1>Robson</h1>
          </div>
        </div>
      </div>
      <ul className={classes.menu}>
        <li
          className={props.timeState === 'daily' && classes.active}
          onClick={() => props.onClick('daily')}
        >
          Daily
        </li>
        <li
          className={props.timeState === 'weekly' && classes.active}
          onClick={() => props.onClick('weekly')}
        >
          Weekly
        </li>
        <li
          className={props.timeState === 'monthly' && classes.active}
          onClick={() => props.onClick('monthly')}
        >
          Monthly
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;
