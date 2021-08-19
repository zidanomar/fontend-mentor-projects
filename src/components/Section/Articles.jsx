import React from 'react';

import classes from './Articles.module.css';

import money from '../../images/image-currency.jpg';
import dinner from '../../images/image-restaurant.jpg';
import flight from '../../images/image-plane.jpg';
import party from '../../images/image-confetti.jpg';
import ArticleCard from '../UI/ArticleCard/ArticleCard';

const Articles = () => {
  const articles = [
    {
      author: 'Claire Robinson',
      title: 'Receive money in any currency with no fees',
      content:
        'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … ',
      image: money
    },
    {
      author: 'Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      content:
        'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … ',
      image: dinner
    },
    {
      author: 'Wilson Hutton',
      title: 'Take your Easybank card wherever you go',
      content:
        'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … ',
      image: flight
    },
    {
      author: 'Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      content:
        'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... ',
      image: party
    }
  ];

  return (
    <section className={classes.articles}>
      <div
        className={`container container-paround ${classes.articles_container}`}
      >
        <h2>Latest Articles</h2>
        <div className={classes.articles__grid}>
          {articles.map((article, index) => (
            <ArticleCard
              image={article.image}
              author={article.author}
              title={article.title}
              content={article.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
