import React from 'react';

import { ReactComponent as Ellipsis } from '../../images/icon-ellipsis.svg';
import classes from './ActivityCard.module.css';

import items from './data.json';

function ActivityCard(props) {
  let time;

  if (props.timeState === 'daily') {
    time = 'day';
  } else if (props.timeState === 'weekly') {
    time = 'week';
  } else {
    time = 'month';
  }

  const toKebapCase = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
  };
  return (
    <div className={classes.activity}>
      {items.map((item, index) => {
        const hour =
          item.timeframes[props.timeState]?.current > 1 ? 'hrs' : 'hr';

        const style = toKebapCase(item.title);

        return (
          <div
            className={`${classes.activity__card} ${classes[style]}`}
            key={index}
          >
            <div
              className={`${classes.card__body} ${
                classes[`card__body-${item.title}`]
              }`}
            >
              <div className={classes.card__category}>
                <h3>{item.title}</h3>
                <div className={classes.button}>
                  <Ellipsis />
                </div>
              </div>
              <div className={classes.card__details}>
                <h2>
                  {`${item.timeframes[props.timeState]?.current} ${
                    item.timeframes[props.timeState].current > 1 ? 'hrs' : 'hr'
                  }`}
                </h2>
                <p>{`Last ${time} - ${
                  item.timeframes[props.timeState].previous
                } ${hour}`}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActivityCard;
