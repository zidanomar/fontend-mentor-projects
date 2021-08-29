import React from 'react';

import classes from './CardBoard.module.css';

function CardBoard(props) {
  return (
    <div className='container'>
      {props.jobs.map((job) => {
        const skills = [job.role, job.level];

        if (job.languages) {
          skills.push(...job.languages);
        }

        if (job.tools) {
          skills.push(...job.tools);
        }

        return (
          <div
            key={job.id}
            className={
              job.featured
                ? `${classes['card-board__wrapper']} ${classes['card-board__wrapper__featured']}`
                : `${classes['card-board__wrapper']}`
            }
          >
            <div className={classes['card-board__image']}>
              <img src={`/assets/images${job.logo}`} alt={job.company} />
            </div>
            <div className={classes['card-board__title']}>
              <div className={classes['card-board__title__heading']}>
                <h3>{job.company}</h3>
                {job.new && (
                  <span className={classes.new}>
                    <small>new</small>
                  </span>
                )}
                {job.featured && (
                  <span className={classes.featured}>
                    <small>featured</small>
                  </span>
                )}
              </div>
              <div className={classes['card-board__title__title']}>
                <h2>{job.position}</h2>
              </div>
              <div className={classes['card-board__title__subtitle']}>
                <p>{job.postedAt}</p>
                <span></span>
                <p>{job.contract}</p>
                <span></span>
                <p>{job.location}</p>
              </div>
            </div>
            <div className={classes.devider}></div>
            <div className={classes['card-board__tags']}>
              {skills.length !== 0 &&
                skills.map((skill, idx) => (
                  <div key={idx} onClick={() => props.onFilter(skill)}>
                    <p>{skill}</p>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardBoard;
