import React from 'react';

import classes from './Filter.module.css';
function Filter(props) {
  return (
    <div className='container'>
      <div className={classes.filter}>
        <div className={classes.filter__queries}>
          {props.filters.map((filter, idx) => (
            <div className={classes['filter__tablet--wrapper']} key={idx}>
              <div
                className={classes.filter__tablet}
                onClick={() => props.onRemoveFilter(filter)}
              >
                <span>{filter}</span>
                <div className={classes.filter__remove}>
                  <img src={'/assets/images/icon-remove.svg'} alt='' />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.filter__celar} onClick={props.onClearFilter}>
          Clear
        </div>
      </div>
    </div>
  );
}

export default Filter;
