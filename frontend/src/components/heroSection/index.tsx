import React from 'react';
import styles from './index.module.css';
import title from '../../accets/Title.png';
import locationPin from '../../accets/Location.png';
import searchIcon from '../../accets/search.png';
import Company from './company';

const HeroSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.textContent}>
          <img src={title} alt="Highlight" className={styles.highlightImg} />
          <p className={styles.subText}>
            Great platform for the job seeker that searching for <br />
            new career heights and passionate about startups.
          </p>

          <div className={styles.searchBox}>
            <div className={styles.inputContainer}>
              <img src={searchIcon} alt="Search" className={styles.icon} />
              <input type="text" placeholder="Job title or keyword" className={styles.input} />
            </div>
            <div className={styles.locationContainer}>
              <img src={locationPin} alt="Location" className={styles.icon} />
              <select className={styles.location}>
                <option>Florence, Italy</option>
              </select>
            </div>
            <button className={styles.searchButton}>Search my job</button>
          </div>

          <p className={styles.popularJobs}>
            Popular: UI Designer, UX Researcher, Android, Admin
          </p>
        </div>
      </section>
      <Company />
    </>
  );
};

export default HeroSection;
