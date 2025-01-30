import React from 'react';
import styles from './index.module.css';
import { ReactComponent as Desing } from '../../accets/category/design.svg';
import { ReactComponent as Arrow } from '../../accets/category/arrow.svg';


const Card: React.FC = ({ icon, title, jobs }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardDescContainer}>
        <p className={styles.cardDescription}>{jobs} jobs Available</p>
        <Arrow />
      </div>
    </div>
  );
};

export default Card;
