import React from 'react';
import styles from './index.module.css';
import company1 from '../../accets/vodafone.png';
import company2 from '../../accets/intel.png';
import company3 from '../../accets/TESLA.png';
import company4 from '../../accets/amda.png';
import company5 from '../../accets/talkit.png';

const Company = () => {
  return (
    <section className={styles.companycontainer}>
      <p className={styles.companyText}>Companies we helped grow</p>
        <div className={styles.logocontainer}>
          <img src={company1} alt="Company 1" className={styles.companyLogo} />
          <img src={company2} alt="Company 2" className={styles.companyLogo} />
          <img src={company3} alt="Company 3" className={styles.companyLogo} />
          <img src={company4} alt="Company 4" className={styles.companyLogo} />
          <img src={company5} alt="Company 5" className={styles.companyLogo} />
        </div>
    </section>
  );
};

export default Company;
