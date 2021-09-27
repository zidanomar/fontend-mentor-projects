import React, { useState } from 'react';

import ProfileCard from '../ProfileCard/ProfileCard';
import ActivityCard from '../ActivityCard/ActivityCard';

import classes from './Container.module.css';

function Container() {
  //const [time, setTime] = useState('weekly');
  const [timeState, setTimeState] = useState('weekly');

  const timeHandler = (time) => {
    setTimeState(time);
  };
  return (
    <div className={classes.container}>
      <ProfileCard onClick={timeHandler} timeState={timeState} />
      <ActivityCard timeState={timeState} />
    </div>
  );
}

export default Container;
