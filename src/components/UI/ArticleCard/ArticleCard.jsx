import React from 'react';

import classes from './ArticleCard.module.css';

const ArticleCard = (props) => {
  return (
    <div className={classes['article-card']}>
      <div
        className={classes['article-card__image']}
        style={{
          backgroundImage: `url(${props.image})`
        }}
      ></div>

      <div className={classes['article-card__content']}>
        <div className={classes['article-card__content__author']}>
          By {props.author}
        </div>
        <div className={classes['article-card__content__title']}>
          {props.title}
        </div>
        <div className={classes['article-card__content__description']}>
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
