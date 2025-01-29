import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.css';
import { ReactComponent as Arrow } from '../../accets/category/arrow.svg';
import jobsData from './cardData';
import Card from './Card';

const Category = () => {
  return (
    <section className={style.categoryContainer}>
      <div className={style.categoryHeader}>
        <h2>Explore By <span>Category</span></h2>
        <Link to='/'>
          <span>Show all jobs</span>
          <Arrow className={style.arrowSign} />
        </Link>
      </div>

      <div className={style.cardsContainer}>
        {jobsData &&
          jobsData.map((card, index) => {
            return <Card key={index} icon={card.icon} title={card.title} job = { card.job } />
        })
        }
      </div>
    </section>
  );
};

export default Category;
