import React from 'react';

import FeaturesCard from '../UI/FeaturesCard/FeaturesCard';

import classes from './Features.module.css';

import online from '../../images/icon-online.svg';
import budgeting from '../../images/icon-budgeting.svg';
import onboard from '../../images/icon-onboarding.svg';
import api from '../../images/icon-api.svg';
const Features = () => {
  const features = [
    {
      image: online,
      title: 'Online Banking',
      description:
        'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world'
    },
    {
      image: budgeting,
      title: 'Simple Budgeting',
      description:
        ' See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits'
    },
    {
      image: onboard,
      title: 'Fast Onboarding',
      description:
        ' We don’t do branches. Open your account in minutes online and start taking control of your finances right away'
    },
    {
      image: api,
      title: 'Open API',
      description:
        ' Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
    }
  ];
  return (
    <section className={classes.features}>
      <div className='container container--py'>
        <div className={classes.feature__intro}>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub.
          </p>
        </div>
        <div className={classes.features__grid}>
          {features.map((feature, index) => (
            <FeaturesCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
